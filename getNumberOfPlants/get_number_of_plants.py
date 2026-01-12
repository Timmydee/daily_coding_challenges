import math

def get_number_of_plants(field_size, unit, crop):
    if unit in ('acre', 'acres'):
        pickedUnit = 4046.86
    elif unit in ('hectare', 'hectares'):
        pickedUnit = 10000
    else:
        return None

    allCrop = {
        "corn": 1,
        "wheat": 0.1,
        "soybeans": 0.5,
        "tomatoes": 0.25,
        "lettuce": 0.2
    }

    pickedCrop = allCrop.get(crop)
    if pickedCrop is None:
        return None

    totalFieldSize = field_size * pickedUnit
    return math.floor(totalFieldSize / pickedCrop)
