import pickle
import os

ROOT_DIR = os.path.dirname(os.path.abspath(__file__))

def load_file(filename):
    
    print(os.listdir())

    # Opening the file
    pick = open(f'{ROOT_DIR}/{filename}', 'rb')

    # Storing the file data with temporary local variable
    model = pickle.load(pick)

    # Closing the file
    pick.close()

    # Returning the data
    return model

def save_file(filename, data):

    # Opening the file
    pick = open(f'{ROOT_DIR}/{filename}', 'wb')

    # Saving the file
    pickle.dump(data, pick)

    # Closing the file
    pick.close()
