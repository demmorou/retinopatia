from keras import Sequential
from keras.layers import Conv2D, BatchNormalization, MaxPool2D, Dropout, Flatten, Dense
from keras.optimizers import Adam

'''
    comments 
    
    weights001 se refere a primeria parte (primeiro modelo) do modelo da CNN.
    
    weights002 se refere a segunda parte (modelo aumentado) do modelo da CNN.
    
'''


def model_cnn():

    model = Sequential()

    # aqui começa a primeira parte (weights001)

    model.add(Conv2D(filters=16, kernel_size=(3, 3), activation='relu', input_shape=(150, 150, 3)))
    model.add(BatchNormalization())

    model.add(Conv2D(filters=16, kernel_size=(3, 3), activation='relu'))
    model.add(BatchNormalization())

    model.add(MaxPool2D(strides=(2, 2)))
    model.add(Dropout(0.25))

    model.add(Conv2D(filters=32, kernel_size=(3, 3), activation='relu'))
    model.add(BatchNormalization())

    model.add(Conv2D(filters=32, kernel_size=(3, 3), activation='relu'))
    model.add(BatchNormalization())

    model.add(MaxPool2D(strides=(2, 2)))
    model.add(Dropout(0.25))

    model.add(Conv2D(filters=64, kernel_size=(3, 3), activation='relu'))
    model.add(BatchNormalization())

    model.add(Conv2D(filters=64, kernel_size=(3, 3), activation='relu'))
    model.add(BatchNormalization())

    model.add(MaxPool2D(strides=(2, 2)))
    model.add(Dropout(0.25))

    # aqui termina a primeira parte (weights001)

    # ----------------------------------------

    # aqui começa a segunda parte (weights002)

    model.add(Conv2D(filters=128, kernel_size=(3, 3), activation='relu'))
    model.add(BatchNormalization())

    model.add(Conv2D(filters=128, kernel_size=(3, 3), activation='relu'))
    model.add(BatchNormalization())

    # aqui termina a segunda parte (weights002)

    model.add(MaxPool2D(strides=(2, 2)))
    model.add(Dropout(0.25))

    model.add(Flatten())
    model.add(Dense(512, activation='relu'))
    model.add(Dropout(0.25))

    model.add(Dense(1024, activation='relu'))
    model.add(Dropout(0.5))

    model.add(Dense(2, activation='softmax'))

    model.compile(loss='categorical_crossentropy', optimizer=Adam(lr=1e-4), metrics=["accuracy"])

    return model