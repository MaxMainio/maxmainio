const allTexts = document.querySelectorAll("p");

allTexts.forEach(element => {
    // element.innerHTML = element.innerHTML.replace(/(\b\w*natur(y|e)\w*\b(?:\w*|'s|')?)/gi, '<span class="first">$1</span>');
    // element.innerHTML = element.innerHTML.replace(/(\b\w*grass\w*\b(?:\w*|'s|')?)/gi, '<span class="second">$1</span>');
    // element.innerHTML = element.innerHTML.replace(/(\b\w*lawn\w*\b(?:\w*|'s|')?)/gi, '<span class="third">$1</span>');



    // element.innerHTML = element.innerHTML.replace(/(nature)/gi, '<span class="first">$1</span>');
    // element.innerHTML = element.innerHTML.replace(/(grass)/gi, '<span class="second">$1</span>');
    // element.innerHTML = element.innerHTML.replace(/(lawn)/gi, '<span class="third">$1</span>');



    element.innerHTML = element.innerHTML.replace(/(flora)/gi, '<span class="col-1">$1</span>');
    element.innerHTML = element.innerHTML.replace(/(foliage)/gi, '<span class="col-2">$1</span>');
    element.innerHTML = element.innerHTML.replace(/(vegetation)/gi, '<span class="col-3">$1</span>');
    element.innerHTML = element.innerHTML.replace(/(greenery)/gi, '<span class="col-4">$1</span>');
    element.innerHTML = element.innerHTML.replace(/(plants)/gi, '<span class="col-5">$1</span>');
    element.innerHTML = element.innerHTML.replace(/(grass|trees)/gi, '<span class="col-6">$1</span>');
    element.innerHTML = element.innerHTML.replace(/(grasses)/gi, '<span class="col-7">$1</span>');
    element.innerHTML = element.innerHTML.replace(/(verdure)/gi, '<span class="col-8">$1</span>');
    element.innerHTML = element.innerHTML.replace(/(forest)/gi, '<span class="col-9">$1</span>');
    element.innerHTML = element.innerHTML.replace(/(flowers|shrubs)/gi, '<span class="col-10">$1</span>');



    element.innerHTML = element.innerHTML.replace(/(green|leaf)/gi, '<span class="col-11">$1</span>');
    element.innerHTML = element.innerHTML.replace(/(tree)/gi, '<span class="col-12">$1</span>');
    element.innerHTML = element.innerHTML.replace(/(petiole|shrub)/gi, '<span class="col-13">$1</span>');
    element.innerHTML = element.innerHTML.replace(/(branch|saplings|seedling|timber|wood)/gi, '<span class="col-14">$1</span>');
    element.innerHTML = element.innerHTML.replace(/(herbage|herbs|sapling|trunk)/gi, '<span class="col-15">$1</span>');
    element.innerHTML = element.innerHTML.replace(/(grassy|natural|park)/gi, '<span class="col-16">$1</span>');
    element.innerHTML = element.innerHTML.replace(/(environment|plant|sod|turf)/gi, '<span class="col-17">$1</span>');
    element.innerHTML = element.innerHTML.replace(/(crops|landscape|lawn|sprout|woods)/gi, '<span class="col-18">$1</span>');
    element.innerHTML = element.innerHTML.replace(/(shoot|vegetables)/gi, '<span class="col-19">$1</span>');
    element.innerHTML = element.innerHTML.replace(/(frond|nature|needle|stalk|stem|woodland)/gi, '<span class="col-20">$1</span>');



    element.innerHTML = element.innerHTML.replace(/(garden|grasslike|leaves)/gi, '<span class="col-21">$1</span>');
    element.innerHTML = element.innerHTML.replace(/(canopy|earth|flower|jungle|peduncle|terrace|thicket|timberland|undergrowth|vine|yard)/gi, '<span class="col-22">$1</span>');
    element.innerHTML = element.innerHTML.replace(/(bush|fauna|growth|lawns|meadow|pasture|scenery|stock|wilderness)/gi, '<span class="col-23">$1</span>');
    element.innerHTML = element.innerHTML.replace(/(blade|habitat|herb|outdoors|petal)/gi, '<span class="col-24">$1</span>');
    element.innerHTML = element.innerHTML.replace(/(backyard|barley|carpeted|ferns|grounds|hay|lush|pure|raw|verdant|view|weed|world)/gi, '<span class="col-25">$1</span>');
    element.innerHTML = element.innerHTML.replace(/(bark|botanical|botanicals|cane|chlorophyll|copse|countryside|ecology|ecosystem|fronds|grassland|grasslands|grove|reed|reeds|seedlings|shortgrass|shortgrasses|sprouts|surroundings|taiga|tallgrass|tallgrasses|twig|veins)/gi, '<span class="col-26">$1</span>');
    element.innerHTML = element.innerHTML.replace(/(annual|axis|backwoods|biennial|bract|brake|bud|chase|clump|coppice|cosmos|country|cover|covert|creeper|crude|cutting|flag|generation|grama|greenness|hardwood|leafage|leaflet|macrocosm|native|pad|pedicel|pedicle|perennial|plain|plot|pulp|scale|seascape|setting|shelter|slip|softwood|stand|stipule|topiary|umbrage|universe|weald|whole|wild)/gi, '<span class="col-27">$1</span>');
    element.innerHTML = element.innerHTML.replace(/(botany|bushes|courtyard|elements|fern|greenswards|ground|rainforest|root|shrubbery|swards|turfs|wildlife)/gi, '<span class="col-28">$1</span>');
    element.innerHTML = element.innerHTML.replace(/(agrarian|agrestal|field|foliole|frondescence|grassplot|lawnlike|matted|megacosm|reedy|sedgy|sodded|sowed|tangled|terrain|turfy|unbleached|uncultivated|undomesticated|unmixed|unpolished|unprocessed|wildwood|woodlot)/gi, '<span class="col-29">$1</span>');
    element.innerHTML = element.innerHTML.replace(/(arboretum|commons|crop|fields|glade|greenspace|greensward|lichen|lichens|meadows|moss|mosses|pastures|prairie|prairies|refuge|reserve|runner|savannas|steppes|stolon|sward|tendril|topography|vines)/gi, '<span class="col-30">$1</span>');
});
