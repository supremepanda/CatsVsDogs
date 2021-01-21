import pickle
import os
import zipfile

ROOT_DIR = os.path.dirname(os.path.abspath(__file__))

# It checks 'model.sav' file is exist
def check_sav_file():
    for i in os.listdir():
        if(i == 'model.sav'):
            return True
    return False

# It unzip the 'model.zip'
def unzip_model():
    with zipfile.ZipFile(f'{ROOT_DIR}/model.zip', 'r') as zip_ref:
        zip_ref.extractall('backend')

# It loads a pickle file 
def load_file(filename):
    
    if(filename == 'model.sav'):
        if(check_sav_file() == False):
            unzip_model()


    # Opening the file
    pick = open(f'{ROOT_DIR}/{filename}', 'rb')

    # Storing the file data with temporary local variable
    model = pickle.load(pick)

    # Closing the file
    pick.close()

    # Returning the data
    return model

# It saves a pickle file
def save_file(filename, data):

    # Opening the file
    pick = open(f'{ROOT_DIR}/{filename}', 'wb')

    # Saving the file
    pickle.dump(data, pick)

    # Closing the file
    pick.close()
