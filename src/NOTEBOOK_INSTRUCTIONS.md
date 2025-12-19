# Instructions pour le Notebook d'Analyse IA

## Note Importante
Je ne peux pas créer de fichiers `.ipynb` (Jupyter Notebooks) dans cet environnement. Voici le code que vous pouvez copier dans votre propre notebook Jupyter/Google Colab.

## Code pour le Notebook d'Analyse ADHD

```python
# Installation des dépendances
!pip install tensorflow keras opencv-python matplotlib numpy pandas scikit-learn

# Imports
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers, models
from tensorflow.keras.preprocessing.image import ImageDataGenerator
from tensorflow.keras.applications import EfficientNetB0, ResNet50
import cv2
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report, confusion_matrix
import seaborn as sns
import os

# Configuration
IMG_SIZE = 224
BATCH_SIZE = 32
EPOCHS = 50

# 1. PRÉPARATION DES DONNÉES
# =============================

def load_and_preprocess_data(data_dir):
    """
    Charge et prétraite les images d'enfants
    Structure attendue:
    data_dir/
        adhd/
            image1.jpg
            image2.jpg
            ...
        non_adhd/
            image1.jpg
            image2.jpg
            ...
    """
    
    # Data Augmentation pour améliorer la généralisation
    train_datagen = ImageDataGenerator(
        rescale=1./255,
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        horizontal_flip=True,
        zoom_range=0.1,
        validation_split=0.2
    )
    
    train_generator = train_datagen.flow_from_directory(
        data_dir,
        target_size=(IMG_SIZE, IMG_SIZE),
        batch_size=BATCH_SIZE,
        class_mode='binary',
        subset='training'
    )
    
    validation_generator = train_datagen.flow_from_directory(
        data_dir,
        target_size=(IMG_SIZE, IMG_SIZE),
        batch_size=BATCH_SIZE,
        class_mode='binary',
        subset='validation'
    )
    
    return train_generator, validation_generator

# 2. MODÈLE DE DEEP LEARNING
# =============================

def create_adhd_detection_model():
    """
    Crée un modèle CNN avec transfer learning
    Utilise EfficientNetB0 pré-entraîné sur ImageNet
    """
    
    # Modèle de base pré-entraîné
    base_model = EfficientNetB0(
        include_top=False,
        weights='imagenet',
        input_shape=(IMG_SIZE, IMG_SIZE, 3)
    )
    
    # Geler les couches de base pour le transfer learning
    base_model.trainable = False
    
    # Construction du modèle complet
    model = models.Sequential([
        base_model,
        layers.GlobalAveragePooling2D(),
        layers.BatchNormalization(),
        layers.Dropout(0.5),
        layers.Dense(256, activation='relu'),
        layers.BatchNormalization(),
        layers.Dropout(0.3),
        layers.Dense(128, activation='relu'),
        layers.Dropout(0.2),
        layers.Dense(1, activation='sigmoid')  # Binaire: ADHD ou non
    ])
    
    return model

# 3. COMPILATION ET ENTRAÎNEMENT
# ================================

def train_model(model, train_generator, validation_generator):
    """
    Compile et entraîne le modèle
    """
    
    # Compilation
    model.compile(
        optimizer=keras.optimizers.Adam(learning_rate=0.001),
        loss='binary_crossentropy',
        metrics=['accuracy', 
                 keras.metrics.Precision(),
                 keras.metrics.Recall(),
                 keras.metrics.AUC()]
    )
    
    # Callbacks
    callbacks = [
        keras.callbacks.EarlyStopping(
            monitor='val_loss',
            patience=10,
            restore_best_weights=True
        ),
        keras.callbacks.ReduceLROnPlateau(
            monitor='val_loss',
            factor=0.5,
            patience=5,
            min_lr=1e-7
        ),
        keras.callbacks.ModelCheckpoint(
            'best_adhd_model.h5',
            monitor='val_accuracy',
            save_best_only=True
        )
    ]
    
    # Entraînement
    history = model.fit(
        train_generator,
        validation_data=validation_generator,
        epochs=EPOCHS,
        callbacks=callbacks,
        verbose=1
    )
    
    return history

# 4. ANALYSE COMPORTEMENTALE AVANCÉE
# =====================================

def analyze_behavioral_patterns(video_path):
    """
    Analyse vidéo pour détecter des patterns comportementaux
    - Mouvement excessif
    - Changements d'attention
    - Agitation
    """
    
    cap = cv2.VideoCapture(video_path)
    face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')
    
    movement_scores = []
    attention_scores = []
    frame_count = 0
    prev_frame = None
    
    while cap.isOpened():
        ret, frame = cap.read()
        if not ret:
            break
            
        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        faces = face_cascade.detectMultiScale(gray, 1.3, 5)
        
        # Détection de mouvement
        if prev_frame is not None:
            diff = cv2.absdiff(prev_frame, gray)
            movement = np.sum(diff) / (frame.shape[0] * frame.shape[1])
            movement_scores.append(movement)
        
        # Score d'attention (basé sur la détection de visage)
        attention = len(faces) > 0
        attention_scores.append(1 if attention else 0)
        
        prev_frame = gray.copy()
        frame_count += 1
        
        # Limiter à 300 frames pour performance
        if frame_count > 300:
            break
    
    cap.release()
    
    # Calcul des métriques
    avg_movement = np.mean(movement_scores) if movement_scores else 0
    attention_rate = np.mean(attention_scores) if attention_scores else 0
    movement_variance = np.var(movement_scores) if movement_scores else 0
    
    return {
        'avg_movement': avg_movement,
        'attention_rate': attention_rate,
        'movement_variance': movement_variance,
        'hyperactivity_score': avg_movement * movement_variance
    }

# 5. PRÉDICTION SUR UNE IMAGE
# ==============================

def predict_adhd(model, image_path):
    """
    Prédit si un enfant sur une image présente des signes de TDAH
    """
    
    # Charger et prétraiter l'image
    img = cv2.imread(image_path)
    img = cv2.resize(img, (IMG_SIZE, IMG_SIZE))
    img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
    img = img / 255.0
    img = np.expand_dims(img, axis=0)
    
    # Prédiction
    prediction = model.predict(img)[0][0]
    
    result = {
        'adhd_probability': float(prediction),
        'classification': 'ADHD détecté' if prediction > 0.5 else 'Pas de ADHD détecté',
        'confidence': float(abs(prediction - 0.5) * 2)  # 0 à 1
    }
    
    return result

# 6. VISUALISATION DES RÉSULTATS
# =================================

def plot_training_history(history):
    """
    Visualise les métriques d'entraînement
    """
    
    fig, axes = plt.subplots(2, 2, figsize=(15, 10))
    
    # Accuracy
    axes[0, 0].plot(history.history['accuracy'], label='Train')
    axes[0, 0].plot(history.history['val_accuracy'], label='Validation')
    axes[0, 0].set_title('Model Accuracy')
    axes[0, 0].set_xlabel('Epoch')
    axes[0, 0].set_ylabel('Accuracy')
    axes[0, 0].legend()
    
    # Loss
    axes[0, 1].plot(history.history['loss'], label='Train')
    axes[0, 1].plot(history.history['val_loss'], label='Validation')
    axes[0, 1].set_title('Model Loss')
    axes[0, 1].set_xlabel('Epoch')
    axes[0, 1].set_ylabel('Loss')
    axes[0, 1].legend()
    
    # Precision
    axes[1, 0].plot(history.history['precision'], label='Train')
    axes[1, 0].plot(history.history['val_precision'], label='Validation')
    axes[1, 0].set_title('Model Precision')
    axes[1, 0].set_xlabel('Epoch')
    axes[1, 0].set_ylabel('Precision')
    axes[1, 0].legend()
    
    # Recall
    axes[1, 1].plot(history.history['recall'], label='Train')
    axes[1, 1].plot(history.history['val_recall'], label='Validation')
    axes[1, 1].set_title('Model Recall')
    axes[1, 1].set_xlabel('Epoch')
    axes[1, 1].set_ylabel('Recall')
    axes[1, 1].legend()
    
    plt.tight_layout()
    plt.show()

def plot_confusion_matrix(y_true, y_pred):
    """
    Affiche la matrice de confusion
    """
    
    cm = confusion_matrix(y_true, (y_pred > 0.5).astype(int))
    
    plt.figure(figsize=(8, 6))
    sns.heatmap(cm, annot=True, fmt='d', cmap='Blues')
    plt.title('Matrice de Confusion')
    plt.ylabel('Vraie Classe')
    plt.xlabel('Classe Prédite')
    plt.show()

# 7. UTILISATION PRINCIPALE
# ===========================

# Exemple d'utilisation complète
if __name__ == "__main__":
    
    # Remplacer par votre chemin de données
    DATA_DIR = '/path/to/your/data'
    
    print("1. Chargement des données...")
    train_gen, val_gen = load_and_preprocess_data(DATA_DIR)
    
    print("2. Création du modèle...")
    model = create_adhd_detection_model()
    model.summary()
    
    print("3. Entraînement du modèle...")
    history = train_model(model, train_gen, val_gen)
    
    print("4. Visualisation des résultats...")
    plot_training_history(history)
    
    print("5. Sauvegarde du modèle...")
    model.save('adhd_detection_final.h5')
    
    # Tester sur une image
    print("6. Test de prédiction...")
    test_image = '/path/to/test/image.jpg'
    result = predict_adhd(model, test_image)
    print(f"Résultat: {result}")
    
    # Analyse comportementale (optionnel)
    # video_path = '/path/to/video.mp4'
    # behavioral_metrics = analyze_behavioral_patterns(video_path)
    # print(f"Métriques comportementales: {behavioral_metrics}")

print("Notebook d'analyse ADHD prêt!")
```

## Structure des Données Recommandée

```
dataset/
├── adhd/
│   ├── child_adhd_001.jpg
│   ├── child_adhd_002.jpg
│   └── ...
└── non_adhd/
    ├── child_normal_001.jpg
    ├── child_normal_002.jpg
    └── ...
```

## Notes Importantes

1. **Éthique et Consentement**: Assurez-vous d'avoir le consentement parental pour toutes les images utilisées
2. **Données Anonymisées**: Les données doivent être anonymisées et sécurisées
3. **Diagnostic Médical**: Ce modèle est un outil d'aide, pas un diagnostic médical
4. **Validation Clinique**: Nécessite une validation par des professionnels de santé
5. **Biais des Données**: Assurez-vous d'avoir un dataset équilibré et diversifié

## Améliorations Possibles

- Utiliser des modèles plus avancés (Vision Transformers, etc.)
- Analyse multi-modale (images + vidéos + données de jeux)
- Modèles d'attention pour localiser les zones d'intérêt
- Ensemble learning avec plusieurs modèles
- Analyse temporelle pour suivre l'évolution
