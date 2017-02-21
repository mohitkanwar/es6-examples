    const PROPERTIES = {"property1":"val1"} // Initialize a constant which is effectively json properties

    PROPERTIES = {"property1":"val2"} // try to modify the constant : error




    PROPERTIES.property1 = "val2"; // try to modify a value inside constant : it Works!