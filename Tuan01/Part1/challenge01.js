 //data1
    let marksMass = 1.69;
    let marksHeight = 78;
    let johnMass = 1.95;
    let johnHeight = 92;
    // data2
    let marksMass2 = 1.88;
    let marksHeight2 = 95;
    let johnMass2 = 1.76;
    let johnHeight2 = 85;

    const calculateBMI = (mass, height) => {
        return mass / (height * height);
    }
    const marksBMI = calculateBMI(marksMass, marksHeight);
    const johnBMI = calculateBMI(johnMass, johnHeight);

    const markHigherBMI = marksBMI > johnBMI;
    console.log("marksBMI > johnBMI: " + markHigherBMI);

    // data2
    const marksBMI2 = calculateBMI(marksMass2, marksHeight2);
    const johnBMI2 = calculateBMI(johnMass2, johnHeight2);
    const markHigherBMI2 = marksBMI2 > johnBMI2;
    console.log("marksBMI > johnBMI: " + markHigherBMI2);