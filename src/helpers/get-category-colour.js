const categoryColourMap = new Map();

categoryColourMap.set('Product Reviews' , 'orange');
categoryColourMap.set('Opinion' , 'green');
categoryColourMap.set('Travel Guides' , 'purple');

const getCategoryColour = (category) => {
    return categoryColourMap.get(category);
};

export default getCategoryColour;