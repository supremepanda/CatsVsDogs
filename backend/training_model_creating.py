import os
import numpy
from sklearn.svm import SVC
from PIL import Image
import file_management

# Constants
CATS = 0
DOGS = 1

ROOT_DIR = os.path.dirname(os.path.abspath(__file__))

# It stores test data to get accuracy of our Support Vector Classifier
def pick_test_data():

    # Path of test data
    directory = f'{ROOT_DIR}/testdata'

    # Categories
    categories = [CATS, DOGS]
    str_categories = ['cats', 'dogs']

    # Empty data array
    data = []

    # For every category
    for category in categories:

        # Getting sub-directory path
        path = os.path.join(directory, str_categories[category])

        # Setting label of image
        label = categories.index(category)
    
        # For each image...
        for img in os.listdir(path):
            # Getting image path
            img_path = os.path.join(path, img)

            # Loading image from img_path
            pet_img = Image.open(img_path)

            # Resizing pet image
            pet_img = pet_img.resize((50, 50))

            # Converting image to 1D array
            image = numpy.asarray(pet_img).flatten()

            # Appending data with category (label)
            data.append([image, label])

    # Saving pre-proceed test data as 'test.pickle'
    file_management.save_file('test.pickle', data)      

# It stores training data as pickle filetype.
def pick_training_data():
    print(ROOT_DIR)
    # The path of the images directory
    directory = f'{ROOT_DIR}/dataset'

    # The array of categories that these are 'cats' and 'dogs'
    categories = [CATS, DOGS]
    str_categories = ['cats', 'dogs']

    # The initialization of empty data array
    data = []
    
    # For every category...
    for category in categories:

        # Getting sub-directory path
        path = os.path.join(directory, str_categories[category])

        # Setting label of image
        label = categories.index(category)
    
        # For each image...
        for img in os.listdir(path):
            # Getting image path
            img_path = os.path.join(path, img)

            # Loading image from img_path
            pet_img = Image.open(img_path)

            # Resizing pet image
            pet_img = pet_img.resize((50, 50))

            # Converting image to 1D array
            image = numpy.asarray(pet_img).flatten()

            # Appending data with category (label)
            data.append([image, label])
            
            
    # Save pre-proceed train data as 'data.pickle' 
    file_management.save_file('data.pickle', data)   

# It opens our train data and creates a new model
def train_data():
    
    # Loading the training data
    data = file_management.load_file('data.pickle')

    # Initializing empty arrays as features and labels
    features = []
    labels = []

    # For feature and label in data ([image, label]), appending to arrays
    for feature, label in data:
        features.append(feature)
        labels.append(label)
    
    # Creating Support Vector Classifier model
    model = SVC(C=1, kernel='poly', gamma='auto')

    # Fitting model
    model.fit(features, labels)

    # Saving fitted model as 'model.sav'
    file_management.save_file('model.sav', model)

#pick_training_data()
#pick_test_data()
#train_data()