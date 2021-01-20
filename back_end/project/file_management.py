import pickle
import os

def load_file(filename):
    
    print(os.listdir())

    # Opening the file
    pick = open('back_end\project\{}'.format(filename), 'rb')

    # Storing the file data with temporary local variable
    model = pickle.load(pick)

    # Closing the file
    pick.close()

    # Returning the data
    return model

def save_file(filename, data):

    # Opening the file
    pick = open('back_end\project\{}'.format(filename), 'wb')

    # Saving the file
    pickle.dump(data, pick)

    # Closing the file
    pick.close()
