import pickle

def load_file(filename):
    
    # Opening the file
    pick = open(filename, 'rb')

    # Storing the file data with temporary local variable
    model = pickle.load(pick)

    # Closing the file
    pick.close()

    # Returning the data
    return model

def save_file(filename, data):

    # Opening the file
    pick = open(filename, 'wb')

    # Saving the file
    pickle.dump(data, pick)

    # Closing the file
    pick.close()
