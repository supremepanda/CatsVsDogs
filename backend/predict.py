from sklearn.svm import SVC
import numpy
from PIL import Image
import file_management

# Constants
CAT = 0
DOG = 1

# It converts image to numpy array
def convert_image_numbers(img_path):
    
    pet_img = Image.open(img_path)
    pet_img = pet_img.resize((50, 50))
    image = numpy.asarray(pet_img).flatten()
    image = image.reshape(1, 7500)
    
    return image
    
# It predicts label of given image, cat or dog
def predict(img_path):

    # Loading the model
    model = file_management.load_file('model.sav')

    # Getting image from convert_image_numbers() function
    image = convert_image_numbers(img_path)

    # Predicting label (cat or dog?)
    predicted_label = model.predict(image)

    if(predicted_label == 0):
        return CAT
    return DOG
        

# It predicts with given test data and calculates accuracy
def predict_with_test_data():

    # Loading the model
    model = file_management.load_file('model.sav')
    
    # Loading the test data
    data = file_management.load_file('test.pickle')

    # Initializing empty arrays for features and labels
    features = []
    labels = []

    # For feature and label in data ([image, label]), appending to arrays
    for feature, label in data:
        features.append(feature)
        labels.append(label)

    # Predicting with test data
    model.predict(features)

    # Calculating accuracy of prediction
    accuracy = model.score(features, labels)

    return accuracy