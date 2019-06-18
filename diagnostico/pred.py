from keras.preprocessing import image
from diagnostico.cnn import model_cnn
import numpy as np
from keras import backend as K


def prediction_one(path_to_image=None):
    import glob as g

    model = model_cnn()
    model.load_weights('media/weights002.h5')

    test_image = image.load_img(path_to_image, target_size=(150, 150))
    test_image = image.img_to_array(test_image)
    test_image = np.expand_dims(test_image, axis=0)
    pred = model.predict_classes(test_image, verbose=2)[0]
    K.clear_session()
    del model

    return pred