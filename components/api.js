// export const getChemicalDetails = async (name) => {
//     try {
//       const response = await fetch(`https://your-api-url/chemical-elements?name=${name}`);
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const data = await response.json();
//       // Assuming the API response has the same structure as the previous hardcoded JSON
//       return data.length > 0 ? data[0].output : null;
//     } catch (error) {
//       console.error('Failed to fetch chemical details:', error);
//       return null; // Return null if there’s an error
//     }
//   };
  
const chemicalData = [
    
    {
        "input": "Hydrogen",
        "output": [
            "Symbol: H",
            "Atomic Number: 1",
            "Atomic weight: 1.00794",
            "Density: 0.0899",
            "Melting Point: 14.01",
            "Boiling Point: 20.28",
            "Phase: Gas",
            "Absolute Melting Point: 14.01",
            "pH Value: 1 (Strong Acid)"
        ]
    },
    {
        "input": "Helium",
        "output": [
            "Symbol: He",
            "Atomic Number: 2",
            "Atomic weight: 4.002602",
            "Density: 0.1785",
            "Melting Point: ",
            "Boiling Point: 4.21999999999997",
            "Phase: Gas",
            "Absolute Melting Point: ",
            "pH Value : (Inert)"
        ]
    },
    {
        "input": "Lithium",
        "output": [
            "Symbol: Li",
            "Atomic Number: 3",
            "Atomic weight: 6.939",
            "Density: 0.534",
            "Melting Point: 180.54",
            "Boiling Point: 1,742",
            "Phase: Solid",
            "Absolute Melting Point: 180.54",
            "pH Value: 14 (Strong Base)"
        ]
    },
    {
        "input": "Beryllium",
        "output": [
            "Symbol: Be",
            "Atomic Number: 4",
            "Atomic weight: 9.012182",
            "Density: 1.85",
            "Melting Point: 1,287",
            "Boiling Point: 2,702",
            "Phase: Solid",
            "Absolute Melting Point: 1,287",
            "pH Value: 9 (Weak Base)"
        ]
    },
    {
        "input": "Boron",
        "output": [
            "Symbol: B",
            "Atomic Number: 5",
            "Atomic weight: 10.811",
            "Density: 2.34",
            "Melting Point: 2,345",
            "Boiling Point: 4,000",
            "Phase: Solid",
            "Absolute Melting Point: 2,345",
            "pH Value: 9 (Weak Base)"
        ]
    },
    {
        "input": "Carbon",
        "output": [
            "Symbol: C",
            "Atomic Number: 6",
            "Atomic weight: 12.0107",
            "Density: 2.26",
            "Melting Point: 3,972",
            "Boiling Point: 4,827",
            "Phase: Solid",
            "Absolute Melting Point: 3,972",
            "pH Value: 7 (Neutral)"
        ]
    },
    {
        "input": "Nitrogen",
        "output": [
            "Symbol: N",
            "Atomic Number: 7",
            "Atomic weight: 14.00674",
            "Density: 1.251",
            "Melting Point: -209.86",
            "Boiling Point: -195.8",
            "Phase: Gas",
            "Absolute Melting Point: -209.86",
            "pH Value: 7 (Neutral)"
        ]
    },
    {
        "input": "Oxygen",
        "output": [
            "Symbol: O",
            "Atomic Number: 8",
            "Atomic weight: 15.9994",
            "Density: 1.429",
            "Melting Point: -218.79",
            "Boiling Point: -182.96",
            "Phase: Gas",
            "Absolute Melting Point: -218.79",
            "pH Value: 7 (Neutral)"
        ]
    },
    {
        "input": "Fluorine",
        "output": [
            "Symbol: F",
            "Atomic Number: 9",
            "Atomic weight: 18.9984032",
            "Density: 1.696",
            "Melting Point: -219.62",
            "Boiling Point: -188.11",
            "Phase: Gas",
            "Absolute Melting Point: -219.62",
            "pH Value: 3 (Weak Acid)"
        ]
    },
    {
        "input": "Neon",
        "output": [
            "Symbol: Ne",
            "Atomic Number: 10",
            "Atomic weight: 20.1797",
            "Density: 0.900",
            "Melting Point: -248.59",
            "Boiling Point: -246.02",
            "Phase: Gas",
            "Absolute Melting Point: -248.59",
            "pH Value:  (Inert)"
        ]
    },
    {
        "input": "Sodium",
        "output": [
            "Symbol: Na",
            "Atomic Number: 11",
            "Atomic weight: 22.98976928",
            "Density: 0.968",
            "Melting Point: 97.82",
            "Boiling Point: 1,083",
            "Phase: Solid",
            "Absolute Melting Point: 97.82",
            "pH Value: 14 (Strong Base)"
        ]
    },
    {
        "input": "Magnesium",
        "output": [
            "Symbol: Mg",
            "Atomic Number: 12",
            "Atomic weight: 24.305",
            "Density: 1.738",
            "Melting Point: 650",
            "Boiling Point: 1,090",
            "Phase: Solid",
            "Absolute Melting Point: 650",
            "pH Value: 9 (Weak Base)"
        ]
    },
    {
        "input": "Aluminum",
        "output": [
            "Symbol: Al",
            "Atomic Number: 13",
            "Atomic weight: 26.9815386",
            "Density: 2.7",
            "Melting Point: 660.32",
            "Boiling Point: 2,519",
            "Phase: Solid",
            "Absolute Melting Point: 660.32",
            "pH Value: 5.5 (Weak Acid)"
        ]
    },
    {
        "input": "Silicon",
        "output": [
            "Symbol: Si",
            "Atomic Number: 14",
            "Atomic weight: 28.0855",
            "Density: 2.33",
            "Melting Point: 1,410",
            "Boiling Point: 3,265",
            "Phase: Solid",
            "Absolute Melting Point: 1,410",
            "pH Value: 9 (Weak Base)"
        ]
    },
    {
        "input": "Phosphorus",
        "output": [
            "Symbol: P",
            "Atomic Number: 15",
            "Atomic weight: 30.973762",
            "Density: 1.82",
            "Melting Point: 44.1",
            "Boiling Point: 280.5",
            "Phase: Solid",
            "Absolute Melting Point: 44.1",
            "pH Value: 7 (Neutral)"
        ]
    },
    {
        "input": "Phosphorus",
        "output": [
            "Symbol: P",
            "Atomic Number: 15",
            "Atomic weight: 30.973762",
            "Density: 1.82",
            "Melting Point: 44.1",
            "Boiling Point: 280.5",
            "Phase: Solid",
            "Absolute Melting Point: 44.1",
            "pH Value: 7 (Neutral)"
        ]
    },
    {
        "input": "Sulfur",
        "output": [
            "Symbol: S",
            "Atomic Number: 16",
            "Atomic weight: 32.065",
            "Density: 2.06",
            "Melting Point: 119.0",
            "Boiling Point: 444.6",
            "Phase: Solid",
            "Absolute Melting Point: 119.0",
            "pH Value: 2 (Weak Acid)"
        ]
    },
    {
        "input": "Chlorine",
        "output": [
            "Symbol: Cl",
            "Atomic Number: 17",
            "Atomic weight: 35.453",
            "Density: 1.562",
            "Melting Point: -34.6",
            "Boiling Point: -34.0",
            "Phase: Gas",
            "Absolute Melting Point: -34.6",
            "pH Value: 7 (Neutral)"
        ]
    },
    {
        "input": "Argon",
        "output": [
            "Symbol: Ar",
            "Atomic Number: 18",
            "Atomic weight: 39.9483",
            "Density: 1.784",
            "Melting Point: -185.8",
            "Boiling Point: -122.2",
            "Phase: Gas",
            "Absolute Melting Point: -185.8",
            "pH Value: (Inert)"
        ]
    },
    {
        "input": "Potassium",
        "output": [
            "Symbol: K",
            "Atomic Number: 19",
            "Atomic weight: 39.0983",
            "Density: 0.89",
            "Melting Point: 63.25",
            "Boiling Point: 760",
            "Phase: Solid",
            "Absolute Melting Point: 63.25",
            "pH Value: 14 (Strong Base)"
        ]
    },
    {
        "input": "Calcium",
        "output": [
            "Symbol: Ca",
            "Atomic Number: 20",
            "Atomic weight: 40.078",
            "Density: 1.54",
            "Melting Point: 842",
            "Boiling Point: 1,484",
            "Phase: Solid",
            "Absolute Melting Point: 842",
            "pH Value: 9 (Weak Base)"
        ]
    },
    {
        "input": "Scandium",
        "output": [
            "Symbol: Sc",
            "Atomic Number: 21",
            "Atomic weight: 44.955912",
            "Density: 2.99",
            "Melting Point: 1,538",
            "Boiling Point: 2,837",
            "Phase: Solid",
            "Absolute Melting Point: 1,538",
            "pH Value: 9 (Weak Base)"
        ]
    },
    {
        "input": "Titanium",
        "output": [
            "Symbol: Ti",
            "Atomic Number: 22",
            "Atomic weight: 47.867",
            "Density: 4.54",
            "Melting Point: 1,668",
            "Boiling Point: 3,300",
            "Phase: Solid",
            "Absolute Melting Point: 1,668",
            "pH Value: 5.5 (Weak Acid)"
        ]
    },
    {
        "input": "Vanadium",
        "output": [
            "Symbol: V",
            "Atomic Number: 23",
            "Atomic weight: 50.9415",
            "Density: 5.9",
            "Melting Point: 1,910",
            "Boiling Point: 3,369",
            "Phase: Solid",
            "Absolute Melting Point: 1,910",
            "pH Value: 7 (Neutral)"
        ]
    },
    {
        "input": "Chromium",
        "output": [
            "Symbol: Cr",
            "Atomic Number: 24",
            "Atomic weight: 51.9961",
            "Density: 7.19",
            "Melting Point: 1,907",
            "Boiling Point: 2,672",
            "Phase: Solid",
            "Absolute Melting Point: 1,907",
            "pH Value: 7 (Neutral)"
        ]
    },
    {
        "input": "Manganese",
        "output": [
            "Symbol: Mn",
            "Atomic Number: 25",
            "Atomic weight: 54.938045",
            "Density: 7.21",
            "Melting Point: 1,244",
            "Boiling Point: 1,944",
            "Phase: Solid",
            "Absolute Melting Point: 1,244",
            "pH Value: 8.5 (Weak Base)"
        ]
    },
    {
        "input": "Iron",
        "output": [
            "Symbol: Fe",
            "Atomic Number: 26",
            "Atomic weight: 55.847",
            "Density: 7.9",
            "Melting Point: 1,538",
            "Boiling Point: 2,800",
            "Phase: Solid",
            "Absolute Melting Point: 1,538",
            "pH Value: 7 (Neutral)"
        ]
    },
    {
        "input": "Cobalt",
        "output": [
            "Symbol: Co",
            "Atomic Number: 27",
            "Atomic weight: 58.933195",
            "Density: 8.9",
            "Melting Point: 1,495",
            "Boiling Point: 2,930",
            "Phase: Solid",
            "Absolute Melting Point: 1,495",
            "pH Value: 7 (Neutral)"
        ]
    },
    {
        "input": "Nickel",
        "output": [
            "Symbol: Ni",
            "Atomic Number: 28",
            "Atomic weight: 58.6934",
            "Density: 8.9",
            "Melting Point: 1,455",
            "Boiling Point: 2,732",
            "Phase: Solid",
            "Absolute Melting Point: 1,455",
            "pH Value: 7 (Neutral)"
        ]
    },
    {
        "input": "Copper",
        "output": [
            "Symbol: Cu",
            "Atomic Number: 29",
            "Atomic weight: 63.546",
            "Density: 8.96",
            "Melting Point: 1,085",
            "Boiling Point: 2,562",
            "Phase: Solid",
            "Absolute Melting Point: 1,085",
            "pH Value: 7 (Neutral)"
        ]
    },
    {
        "input": "Zinc",
        "output": [
            "Symbol: Zn",
            "Atomic Number: 30",
            "Atomic weight: 65.38",
            "Density: 7.14",
            "Melting Point: 419.53",
            "Boiling Point: 907.85",
            "Phase: Solid",
            "Absolute Melting Point: 419.53",
            "pH Value: 9 (Weak Base)"
        ]
    },
    {
        "input": "Gallium",
        "output": [
            "Symbol: Ga",
            "Atomic Number: 31",
            "Atomic weight: 69.723",
            "Density: 5.91",
            "Melting Point: 29.76",
            "Boiling Point: 2,207",
            "Phase: Solid",
            "Absolute Melting Point: 29.76",
            "pH Value: 7 (Neutral)"
        ]
    },
    {
        "input": "Germanium",
        "output": [
            "Symbol: Ge",
            "Atomic Number: 32",
            "Atomic weight: 72.59",
            "Density: 5.32",
            "Melting Point: 937.4",
            "Boiling Point: 2,830",
            "Phase: Solid",
            "Absolute Melting Point: 937.4",
            "pH Value: 7 (Neutral)"
        ]
    },
    {
        "input": "Arsenic",
        "output": [
            "Symbol: As",
            "Atomic Number: 33",
            "Atomic weight: 74.9216",
            "Density: 5.73",
            "Melting Point: 613.3",
            "Boiling Point: 1,815",
            "Phase: Solid",
            "Absolute Melting Point: 613.3",
            "pH Value: 3 (Weak Acid)"
        ]
    },
    {
        "input": "Selenium",
        "output": [
            "Symbol: Se",
            "Atomic Number: 34",
            "Atomic weight: 78.971",
            "Density: 4.79",
            "Melting Point: 217",
            "Boiling Point: 684",
            "Phase: Solid",
            "Absolute Melting Point: 217",
            "pH Value: 7 (Neutral)"
        ]
    },
    {
        "input": "Bromine",
        "output": [
            "Symbol: Br",
            "Atomic Number: 35",
            "Atomic weight: 79.904",
            "Density: 3.12",
            "Melting Point: -7.2",
            "Boiling Point: 58.8",
            "Phase: Liquid",
            "Absolute Melting Point: -7.2",
            "pH Value: 7 (Neutral)"
        ]
    },
    {
        "input": "Krypton",
        "output": [
            "Symbol: Kr",
            "Atomic Number: 36",
            "Atomic weight: 83.798",
            "Density: 0.00398",
            "Melting Point: -153.22",
            "Boiling Point: -152.22",
            "Phase: Gas",
            "Absolute Melting Point: -153.22",
            "pH Value:  (Inert)"
        ]
    },
    {
        "input": "Strontium",
        "output": [
            "Symbol: Sr",
            "Atomic Number: 37",
            "Atomic weight: 87.62",
            "Density: 2.64",
            "Melting Point: 769",
            "Boiling Point: 1,371",
            "Phase: Solid",
            "Absolute Melting Point: 769",
            "pH Value: 9 (Weak Base)"
        ]
    },
    {
        "input": "Ruthenium",
        "output": [
            "Symbol: Ru",
            "Atomic Number: 44",
            "Atomic weight: 101.07",
            "Density: 12.45",
            "Melting Point: 1,660",
            "Boiling Point: 3,950",
            "Phase: Solid",
            "Absolute Melting Point: 1,660",
            "pH Value: 7 (Neutral)"
        ]
    },
    {
        "input": "Rhodium",
        "output": [
            "Symbol: Rh",
            "Atomic Number: 45",
            "Atomic weight: 102.9055",
            "Density: 12.41",
            "Melting Point: 1,966",
            "Boiling Point: 3,725",
            "Phase: Solid",
            "Absolute Melting Point: 1,966",
            "pH Value: 7 (Neutral)"
        ]
    },
    {
        "input": "Palladium",
        "output": [
            "Symbol: Pd",
            "Atomic Number: 46",
            "Atomic weight: 106.42",
            "Density: 12.02",
            "Melting Point: 1,554",
            "Boiling Point: 2,963",
            "Phase: Solid",
            "Absolute Melting Point: 1,554",
            "pH Value: 7 (Neutral)"
        ]
    },
    {
        "input": "Silver",
        "output": [
            "Symbol: Ag",
            "Atomic Number: 47",
            "Atomic weight: 107.8682",
            "Density: 10.49",
            "Melting Point: 961.78",
            "Boiling Point: 2,162",
            "Phase: Solid",
            "Absolute Melting Point: 961.78",
            "pH Value: 7 (Neutral)"
        ]
    },
    {
        "input": "Cadmium",
        "output": [
            "Symbol: Cd",
            "Atomic Number: 48",
            "Atomic weight: 112.411",
            "Density: 8.65",
            "Melting Point: 321.07",
            "Boiling Point: 767",
            "Phase: Solid",
            "Absolute Melting Point: 321.07",
            "pH Value: 7 (Neutral)"
        ]
    },
    {
        "input": "Indium",
        "output": [
            "Symbol: In",
            "Atomic Number: 49",
            "Atomic weight: 114.818",
            "Density: 7.31",
            "Melting Point: 156.6",
            "Boiling Point: 2,072",
            "Phase: Solid",
            "Absolute Melting Point: 156.6",
            "pH Value: 7 (Neutral)"
        ]
    },
    {
        "input": "Tin",
        "output": [
            "Symbol: Sn",
            "Atomic Number: 50",
            "Atomic weight: 118.710",
            "Density: 7.31",
            "Melting Point: 231.93",
            "Boiling Point: 2,602",
            "Phase: Solid",
            "Absolute Melting Point: 231.93",
            "pH Value: 7 (Neutral)"
        ]
    },
    {
        "input": "Antimony",
        "output": [
            "Symbol: Sb",
            "Atomic Number: 51",
            "Atomic weight: 121.760",
            "Density: 6.697",
            "Melting Point: 630.63",
            "Boiling Point: 1,750",
            "Phase: Solid",
            "Absolute Melting Point: 630.63",
            "pH Value: 7 (Neutral)"
        ]
    },
    {
        "input": "Tellurium",
        "output": [
            "Symbol: Te",
            "Atomic Number: 52",
            "Atomic weight: 127.60",
            "Density: 6.24",
            "Melting Point: 449.51",
            "Boiling Point: 988",
            "Phase: Solid",
            "Absolute Melting Point: 449.51",
            "pH Value: 7 (Neutral)"
        ]
    },
    {
        "input": "Iodine",
        "output": [
            "Symbol: I",
            "Atomic Number: 53",
            "Atomic weight: 126.9045",
            "Density: 4.93",
            "Melting Point: 113.5",
            "Boiling Point: 184.3",
            "Phase: Solid",
            "Absolute Melting Point: 113.5",
            "pH Value: 7 (Neutral)"
        ]
    },
    {
        "input": "Xenon",
        "output": [
            "Symbol: Xe",
            "Atomic Number: 54",
            "Atomic weight: 131.293",
            "Density: 0.005894",
            "Melting Point: -111.75",
            "Boiling Point: -108.1",
            "Phase: Gas",
            "Absolute Melting Point: -111.75",
            "pH Value: N/A"
        ]
    },
    {
        "input": "Cesium",
        "output": [
            "Symbol: Cs",
            "Atomic Number: 55",
            "Atomic weight: 132.9055",
            "Density: 1.93",
            "Melting Point: 28.44",
            "Boiling Point: 671",
            "Phase: Solid",
            "Absolute Melting Point: 28.44",
            "pH Value: 7 (Neutral)"
        ]
    },
    {
        "input": "Barium",
        "output": [
            "Symbol: Ba",
            "Atomic Number: 56",
            "Atomic weight: 137.327",
            "Density: 3.51",
            "Melting Point: 725",
            "Boiling Point: 1,640",
            "Phase: Solid",
            "Absolute Melting Point: 725",
            "pH Value: 7 (Neutral)"
        ]
    },
    {
        "input": "Lanthanum",
        "output": [
            "Symbol: La",
            "Atomic Number: 57",
            "Atomic weight: 138.9055",
            "Density: 6.162",
            "Melting Point: 920",
            "Boiling Point: 3,464",
            "Phase: Solid",
            "Absolute Melting Point: 920",
            "pH Value: 7 (Neutral)"
        ]
    },
    {
        "input": "Cerium",
        "output": [
            "Symbol: Ce",
            "Atomic Number: 58",
            "Atomic weight: 140.116",
            "Density: 6.770",
            "Melting Point: 798",
            "Boiling Point: 3,426",
            "Phase: Solid",
            "Absolute Melting Point: 798",
            "pH Value: 7 (Neutral)"
        ]
    },
    {
        "input": "Praseodymium",
        "output": [
            "Symbol: Pr",
            "Atomic Number: 59",
            "Atomic weight: 140.9077",
            "Density: 6.773",
            "Melting Point: 931",
            "Boiling Point: 3,512",
            "Phase: Solid",
            "Absolute Melting Point: 931",
            "pH Value: 7 (Neutral)"
        ]
    },
    {
        "input": "Neodymium",
        "output": [
            "Symbol: Nd",
            "Atomic Number: 60",
            "Atomic weight: 144.242",
            "Density: 7.007",
            "Melting Point: 1,021",
            "Boiling Point: 3,074",
            "Phase: Solid",
            "Absolute Melting Point: 1,021",
            "pH Value: 7 (Neutral)"
        ]
    },
    {
        "input": "Promethium",
        "output": [
            "Symbol: Pm",
            "Atomic Number: 61",
            "Atomic weight: 145",
            "Density: 7.26",
            "Melting Point: 1,042",
            "Boiling Point: 3,000",
            "Phase: Solid",
            "Absolute Melting Point: 1,042",
            "pH Value: 7 (Neutral)"
        ]
    },
    {
        "input": "Samarium",
        "output": [
            "Symbol: Sm",
            "Atomic Number: 62",
            "Atomic weight: 150.36",
            "Density: 7.52",
            "Melting Point: 1,072",
            "Boiling Point: 1,794",
            "Phase: Solid",
            "Absolute Melting Point: 1,072",
            "pH Value: 7 (Neutral)"
        ]
    },
    {
        "input": "Europium",
        "output": [
            "Symbol: Eu",
            "Atomic Number: 63",
            "Atomic weight: 151.964",
            "Density: 5.244",
            "Melting Point: 822",
            "Boiling Point: 1,597",
            "Phase: Solid",
            "Absolute Melting Point: 822",
            "pH Value: 7 (Neutral)"
        ]
    },
    {
        "input": "Gadolinium",
        "output": [
            "Symbol: Gd",
            "Atomic Number: 64",
            "Atomic weight: 157.25",
            "Density: 7.901",
            "Melting Point: 1,313",
            "Boiling Point: 3,273",
            "Phase: Solid",
            "Absolute Melting Point: 1,313",
            "pH Value: 7 (Neutral)"
        ]
    },
    {
        "input": "Terbium",
        "output": [
            "Symbol: Tb",
            "Atomic Number: 65",
            "Atomic weight: 158.9254",
            "Density: 8.23",
            "Melting Point: 1,356",
            "Boiling Point: 3,230",
            "Phase: Solid",
            "Absolute Melting Point: 1,356",
            "pH Value: 7 (Neutral)"
        ]
    },
    {
        "input": "Dysprosium",
        "output": [
            "Symbol: Dy",
            "Atomic Number: 66",
            "Atomic weight: 162.500",
            "Density: 8.540",
            "Melting Point: 1,412",
            "Boiling Point: 2,562",
            "Phase: Solid",
            "Absolute Melting Point: 1,412",
            "pH Value: 7 (Neutral)"
        ]
    },
    {
        "input": "Holmium",
        "output": [
            "Symbol: Ho",
            "Atomic Number: 67",
            "Atomic weight: 164.9303",
            "Density: 8.795",
            "Melting Point: 1,474",
            "Boiling Point: 2,720",
            "Phase: Solid",
            "Absolute Melting Point: 1,474",
            "pH Value: 7 (Neutral)"
        ]
    },
    {
        "input": "Erbium",
        "output": [
            "Symbol: Er",
            "Atomic Number: 68",
            "Atomic weight: 167.259",
            "Density: 9.066",
            "Melting Point: 1,529",
            "Boiling Point: 2,868",
            "Phase: Solid",
            "Absolute Melting Point: 1,529",
            "pH Value: 7 (Neutral)"
        ]
    },
    {
        "input": "Thulium",
        "output": [
            "Symbol: Tm",
            "Atomic Number: 69",
            "Atomic weight: 168.9342",
            "Density: 9.321",
            "Melting Point: 1,545",
            "Boiling Point: 1,950",
            "Phase: Solid",
            "Absolute Melting Point: 1,545",
            "pH Value: 7 (Neutral)"
        ]
    },
    {
        "input": "Ytterbium",
        "output": [
            "Symbol: Yb",
            "Atomic Number: 70",
            "Atomic weight: 173.04",
            "Density: 6.965",
            "Melting Point: 824",
            "Boiling Point: 1,196",
            "Phase: Solid",
            "Absolute Melting Point: 824",
            "pH Value: 7 (Neutral)"
        ]
    },
    {
        "input": "Lutetium",
        "output": [
            "Symbol: Lu",
            "Atomic Number: 71",
            "Atomic weight: 174.967",
            "Density: 9.841",
            "Melting Point: 1,663",
            "Boiling Point: 3,402",
            "Phase: Solid",
            "Absolute Melting Point: 1,663",
            "pH Value: 7 (Neutral)"
        ]
    },
    {
        "input": "Hafnium",
        "output": [
            "Symbol: Hf",
            "Atomic Number: 72",
            "Atomic weight: 178.49",
            "Density: 13.31",
            "Melting Point: 2,233",
            "Boiling Point: 4,603",
            "Phase: Solid",
            "Absolute Melting Point: 2,233",
            "pH Value: 7 (Neutral)"
        ]
    },
    {
        "input": "Tantalum",
        "output": [
            "Symbol: Ta",
            "Atomic Number: 73",
            "Atomic weight: 180.9479",
            "Density: 16.654",
            "Melting Point: 3,017",
            "Boiling Point: 5,458",
            "Phase: Solid",
            "Absolute Melting Point: 3,017",
            "pH Value: 7 (Neutral)"
        ]
    },
    {
        "input": "Tungsten",
        "output": [
            "Symbol: W",
            "Atomic Number: 74",
            "Atomic weight: 183.84",
            "Density: 19.25",
            "Melting Point: 3,422",
            "Boiling Point: 5,555",
            "Phase: Solid",
            "Absolute Melting Point: 3,422",
            "pH Value: 7 (Neutral)"
        ]
    },
    {
        "input": "Rhenium",
        "output": [
            "Symbol: Re",
            "Atomic Number: 75",
            "Atomic weight: 186.207",
            "Density: 21.02",
            "Melting Point: 3,186",
            "Boiling Point: 5,596",
            "Phase: Solid",
            "Absolute Melting Point: 3,186",
            "pH Value: 7 (Neutral)"
        ]
    },
    {
        "input": "Osmium",
        "output": [
            "Symbol: Os",
            "Atomic Number: 76",
            "Atomic weight: 190.23",
            "Density: 22.59",
            "Melting Point: 3,033",
            "Boiling Point: 5,012",
            "Phase: Solid",
            "Absolute Melting Point: 3,033",
            "pH Value: 7 (Neutral)"
        ]
    },
    {
        "input": "Iridium",
        "output": [
            "Symbol: Ir",
            "Atomic Number: 77",
            "Atomic weight: 192.217",
            "Density: 22.56",
            "Melting Point: 2,447",
            "Boiling Point: 4,403",
            "Phase: Solid",
            "Absolute Melting Point: 2,447",
            "pH Value: 7 (Neutral)"
        ]
    },
    {
        "input": "Platinum",
        "output": [
            "Symbol: Pt",
            "Atomic Number: 78",
            "Atomic weight: 195.084",
            "Density: 21.45",
            "Melting Point: 1,772",
            "Boiling Point: 3,825",
            "Phase: Solid",
            "Absolute Melting Point: 1,772",
            "pH Value: 7 (Neutral)"
        ]
    },
    {
        "input": "Gold",
        "output": [
            "Symbol: Au",
            "Atomic Number: 79",
            "Atomic weight: 196.9665",
            "Density: 19.3",
            "Melting Point: 1,064.18",
            "Boiling Point: 2,700",
            "Phase: Solid",
            "Absolute Melting Point: 1,064.18",
            "pH Value: 7 (Neutral)"
        ]
    },
    {
        "input": "Mercury",
        "output": [
            "Symbol: Hg",
            "Atomic Number: 80",
            "Atomic weight: 200.59",
            "Density: 13.534",
            "Melting Point: -38.83",
            "Boiling Point: 356.73",
            "Phase: Liquid",
            "Absolute Melting Point: -38.83",
            "pH Value: 7 (Neutral)"
        ]
    },
    {
        "input": "Thallium",
        "output": [
            "Symbol: Tl",
            "Atomic Number: 81",
            "Atomic weight: 204.3833",
            "Density: 11.85",
            "Melting Point: 303.5",
            "Boiling Point: 1,457",
            "Phase: Solid",
            "Absolute Melting Point: 303.5",
            "pH Value: 7 (Neutral)"
        ]
    },
    {
        "input": "Lead",
        "output": [
            "Symbol: Pb",
            "Atomic Number: 82",
            "Atomic weight: 207.2",
            "Density: 11.34",
            "Melting Point: 327.5",
            "Boiling Point: 1,749",
            "Phase: Solid",
            "Absolute Melting Point: 327.5",
            "pH Value: 7 (Neutral)"
        ]
    },
    {
        "input": "Bismuth",
        "output": [
            "Symbol: Bi",
            "Atomic Number: 83",
            "Atomic weight: 208.9804",
            "Density: 9.78",
            "Melting Point: 271.4",
            "Boiling Point: 1,564",
            "Phase: Solid",
            "Absolute Melting Point: 271.4",
            "pH Value: 7 (Neutral)"
        ]
    },
    {
        "input": "Polonium",
        "output": [
            "Symbol: Po",
            "Atomic Number: 84",
            "Atomic weight: 209",
            "Density: 9.196",
            "Melting Point: 254",
            "Boiling Point: 962",
            "Phase: Solid",
            "Absolute Melting Point: 254",
            "pH Value: 7 (Neutral)"
        ]
    },
    {
        "input": "Astatine",
        "output": [
            "Symbol: At",
            "Atomic Number: 85",
            "Atomic weight: 210",
            "Density: 7.0",
            "Melting Point: 302",
            "Boiling Point: 337",
            "Phase: Solid",
            "Absolute Melting Point: 302",
            "pH Value: 7 (Neutral)"
        ]
    },
    {
        "input": "Radon",
        "output": [
            "Symbol: Rn",
            "Atomic Number: 86",
            "Atomic weight: 222",
            "Density: 0.00973",
            "Melting Point: -71",
            "Boiling Point: -61.8",
            "Phase: Gas",
            "Absolute Melting Point: -71",
            "pH Value: N/A"
        ]
    },
    {
        "input": "Francium",
        "output": [
            "Symbol: Fr",
            "Atomic Number: 87",
            "Atomic weight: 223",
            "Density: 1.87",
            "Melting Point: 27",
            "Boiling Point: 677",
            "Phase: Solid",
            "Absolute Melting Point: 27",
            "pH Value: 7 (Neutral)"
        ]
    },
    {
        "input": "Radium",
        "output": [
            "Symbol: Ra",
            "Atomic Number: 88",
            "Atomic weight: 226",
            "Density: 5.5",
            "Melting Point: 700",
            "Boiling Point: 1,737",
            "Phase: Solid",
            "Absolute Melting Point: 700",
            "pH Value: 7 (Neutral)"
        ]
    },
    {
        "input": "Actinium",
        "output": [
            "Symbol: Ac",
            "Atomic Number: 89",
            "Atomic weight: 227",
            "Density: 10.07",
            "Melting Point: 1,050",
            "Boiling Point: 3,200",
            "Phase: Solid",
            "Absolute Melting Point: 1,050",
            "pH Value: 7 (Neutral)"
        ]
    },
    {
        "input": "Thorium",
        "output": [
            "Symbol: Th",
            "Atomic Number: 90",
            "Atomic weight: 232.0381",
            "Density: 11.72",
            "Melting Point: 1,750",
            "Boiling Point: 4,790",
            "Phase: Solid",
            "Absolute Melting Point: 1,750",
            "pH Value: 7 (Neutral)"
        ]
    },
    {
        "input": "Protactinium",
        "output": [
            "Symbol: Pa",
            "Atomic Number: 91",
            "Atomic weight: 231.0359",
            "Density: 15.37",
            "Melting Point: 1,568",
            "Boiling Point: 4,027",
            "Phase: Solid",
            "Absolute Melting Point: 1,568",
            "pH Value: 7 (Neutral)"
        ]
    },
    {
        "input": "Uranium",
        "output": [
            "Symbol: U",
            "Atomic Number: 92",
            "Atomic weight: 238.0289",
            "Density: 19.1",
            "Melting Point: 1,132",
            "Boiling Point: 4,131",
            "Phase: Solid",
            "Absolute Melting Point: 1,132",
            "pH Value: 7 (Neutral)"
        ]
    },
    {
        "input": "Neptunium",
        "output": [
            "Symbol: Np",
            "Atomic Number: 93",
            "Atomic weight: 237",
            "Density: 20.45",
            "Melting Point: 644",
            "Boiling Point: 3,902",
            "Phase: Solid",
            "Absolute Melting Point: 644",
            "pH Value: 7 (Neutral)"
        ]
    },
    {
        "input": "Plutonium",
        "output": [
            "Symbol: Pu",
            "Atomic Number: 94",
            "Atomic weight: 244",
            "Density: 19.816",
            "Melting Point: 641",
            "Boiling Point: 3,232",
            "Phase: Solid",
            "Absolute Melting Point: 641",
            "pH Value: 7 (Neutral)"
        ]
    },
    {
        "input": "Americium",
        "output": [
            "Symbol: Am",
            "Atomic Number: 95",
            "Atomic weight: 243",
            "Density: 12",
            "Melting Point: 1,176",
            "Boiling Point: 2,607",
            "Phase: Solid",
            "Absolute Melting Point: 1,176",
            "pH Value: 7 (Neutral)"
        ]
    },
    {
        "input": "Curium",
        "output": [
            "Symbol: Cm",
            "Atomic Number: 96",
            "Atomic weight: 247",
            "Density: 13.51",
            "Melting Point: 1,340",
            "Boiling Point: 3,110",
            "Phase: Solid",
            "Absolute Melting Point: 1,340",
            "pH Value: 7 (Neutral)"
        ]
    },
    {
        "input": "Berkelium",
        "output": [
            "Symbol: Bk",
            "Atomic Number: 97",
            "Atomic weight: 247",
            "Density: 14.78",
            "Melting Point: 986",
            "Boiling Point: 2,627",
            "Phase: Solid",
            "Absolute Melting Point: 986",
            "pH Value: 7 (Neutral)"
        ]
    },
    {
        "input": "Californium",
        "output": [
            "Symbol: Cf",
            "Atomic Number: 98",
            "Atomic weight: 251",
            "Density: 15.1",
            "Melting Point: 900",
            "Boiling Point: 1,470",
            "Phase: Solid",
            "Absolute Melting Point: 900",
            "pH Value: 7 (Neutral)"
        ]
    },
    {
        "input": "Einsteinium",
        "output": [
            "Symbol: Es",
            "Atomic Number: 99",
            "Atomic weight: 252",
            "Density: 8.84",
            "Melting Point: 860",
            "Boiling Point: 996",
            "Phase: Solid",
            "Absolute Melting Point: 860",
            "pH Value: 7 (Neutral)"
        ]
    },
    {
        "input": "Fermium",
        "output": [
            "Symbol: Fm",
            "Atomic Number: 100",
            "Atomic weight: 257",
            "Density: 9.7",
            "Melting Point: 1,527",
            "Boiling Point: N/A",
            "Phase: Solid",
            "Absolute Melting Point: 1,527",
            "pH Value: 7 "
        ]
    },
    {
        "input": "Mendelevium",
        "output": [
            "Symbol: Md",
            "Atomic Number: 101",
            "Atomic weight: 258",
            "Density: 10.3",
            "Melting Point: 827",
            "Boiling Point: N/A",
            "Phase: Solid",
            "Absolute Melting Point: 827",
            "pH Value: 7 "
        ]
    },
    {
        "input": "Nobelium",
        "output": [
            "Symbol: No",
            "Atomic Number: 102",
            "Atomic weight: 259",
            "Density: 9.9",
            "Melting Point: 827",
            "Boiling Point: N/A",
            "Phase: Solid",
            "Absolute Melting Point: 827",
            "pH Value: 7 "
        ]
    },
    {
        "input": "Lawrencium",
        "output": [
            "Symbol: Lr",
            "Atomic Number: 103",
            "Atomic weight: 262",
            "Density: 15.6",
            "Melting Point: 1,627",
            "Boiling Point: N/A",
            "Phase: Solid",
            "Absolute Melting Point: 1,627",
            "pH Value: 7 "
        ]
    },
    {
        "input": "Rutherfordium",
        "output": [
            "Symbol: Rf",
            "Atomic Number: 104",
            "Atomic weight: 267",
            "Density: 23.2",
            "Melting Point: 2,100",
            "Boiling Point: N/A",
            "Phase: Solid",
            "Absolute Melting Point: 2,100",
            "pH Value: 7 "
        ]
    },
    {
        "input": "Dubnium",
        "output": [
            "Symbol: Db",
            "Atomic Number: 105",
            "Atomic weight: 270",
            "Density: 29.3",
            "Melting Point: N/A",
            "Boiling Point: N/A",
            "Phase: Solid",
            "Absolute Melting Point: N/A",
            "pH Value: 7 "
        ]
    },
    {
        "input": "Seaborgium",
        "output": [
            "Symbol: Sg",
            "Atomic Number: 106",
            "Atomic weight: 271",
            "Density: 35.0",
            "Melting Point: N/A",
            "Boiling Point: N/A",
            "Phase: Solid",
            "Absolute Melting Point: N/A",
            "pH Value: 7 "
        ]
    },
    {
        "input": "Bohrium",
        "output": [
            "Symbol: Bh",
            "Atomic Number: 107",
            "Atomic weight: 270",
            "Density: 37.1",
            "Melting Point: N/A",
            "Boiling Point: N/A",
            "Phase: Solid",
            "Absolute Melting Point: N/A",
            "pH Value: 7 "
        ]
    },
    {
        "input": "Hassium",
        "output": [
            "Symbol: Hs",
            "Atomic Number: 108",
            "Atomic weight: 277",
            "Density: 41.0",
            "Melting Point: N/A",
            "Boiling Point: N/A",
            "Phase: Solid",
            "Absolute Melting Point: N/A",
            "pH Value: 7 "
        ]
    },
    {
        "input": "Meitnerium",
        "output": [
            "Symbol: Mt",
            "Atomic Number: 109",
            "Atomic weight: 278",
            "Density: 37.4",
            "Melting Point: N/A",
            "Boiling Point: N/A",
            "Phase: Solid",
            "Absolute Melting Point: N/A",
            "pH Value: 7 "
        ]
    },
    {
        "input": "Darmstadtium",
        "output": [
            "Symbol: Ds",
            "Atomic Number: 110",
            "Atomic weight: 281",
            "Density: 34.8",
            "Melting Point: N/A",
            "Boiling Point: N/A",
            "Phase: Solid",
            "Absolute Melting Point: N/A",
            "pH Value: 7 "
        ]
    },
    {
        "input": "Roentgenium",
        "output": [
            "Symbol: Rg",
            "Atomic Number: 111",
            "Atomic weight: 282",
            "Density: 28.7",
            "Melting Point: N/A",
            "Boiling Point: N/A",
            "Phase: Solid",
            "Absolute Melting Point: N/A",
            "pH Value: 7 "
        ]
    },
    {
        "input": "Copernicium",
        "output": [
            "Symbol: Cn",
            "Atomic Number: 112",
            "Atomic weight: 285",
            "Density: 23.7",
            "Melting Point: N/A",
            "Boiling Point: N/A",
            "Phase: Solid",
            "Absolute Melting Point: N/A",
            "pH Value: 7 "
        ]
    },
    {
        "input": "Nihonium",
        "output": [
            "Symbol: Nh",
            "Atomic Number: 113",
            "Atomic weight: 286",
            "Density: 16",
            "Melting Point: N/A",
            "Boiling Point: N/A",
            "Phase: Solid",
            "Absolute Melting Point: N/A",
            "pH Value: 7 "
        ]
    },
    {
        "input": "Flerovium",
        "output": [
            "Symbol: Fl",
            "Atomic Number: 114",
            "Atomic weight: 289",
            "Density: 14",
            "Melting Point: N/A",
            "Boiling Point: N/A",
            "Phase: Solid",
            "Absolute Melting Point: N/A",
            "pH Value: 7 "
        ]
    },
    {
        "input": "Moscovium",
        "output": [
            "Symbol: Mc",
            "Atomic Number: 115",
            "Atomic weight: 290",
            "Density: 13.5",
            "Melting Point: N/A",
            "Boiling Point: N/A",
            "Phase: Solid",
            "Absolute Melting Point: N/A",
            "pH Value: 7 "
        ]
    },
    {
        "input": "Livermorium",
        "output": [
            "Symbol: Lv",
            "Atomic Number: 116",
            "Atomic weight: 293",
            "Density: 12.9",
            "Melting Point: N/A",
            "Boiling Point: N/A",
            "Phase: Solid",
            "Absolute Melting Point: N/A",
            "pH Value: 7 "
        ]
    },
    {
        "input": "Tennessine",
        "output": [
            "Symbol: Ts",
            "Atomic Number: 117",
            "Atomic weight: 294",
            "Density: 7.2",
            "Melting Point: N/A",
            "Boiling Point: N/A",
            "Phase: Solid",
            "Absolute Melting Point: N/A",
            "pH Value: 7 "
        ]
    },
    {
        "input": "Oganesson",
        "output": [
            "Symbol: Og",
            "Atomic Number: 118",
            "Atomic weight: 294",
            "Density: 5.0",
            "Melting Point: N/A",
            "Boiling Point: N/A",
            "Phase: Solid",
            "Absolute Melting Point: N/A",
            "pH Value: 7 "
        ]
    },
    {
        "input": "Acetic Acid",
        "output": [
            "Molecular Formula: C₂H₄O₂",
            "Molar Mass: 60.05 g/mol",
            "Boiling Point: 118.1 °C",
            "Melting Point: 16.6 °C",
            "Water Solubility: Miscible",
            "Biodegradability: Readily biodegradable",
            "Flammability: Flammable",
            "Corrosivity: Corrosive to metals and skin",
            "Density: 1.049 g/cm³",
            "Radioactivity: Non-radioactive",
            "pH Value: 2.4 (0.1 M solution)"
        ]
    },
    {
        "input": "Acetone",
        "output": [
            "Molecular Formula: C₃H₆O",
            "Molar Mass: 58.08 g/mol",
            "Boiling Point: 56 °C",
            "Melting Point: -95 °C",
            "Water Solubility: Miscible",
            "Biodegradability: Readily biodegradable",
            "Flammability: Highly flammable",
            "Corrosivity: Not corrosive",
            "Density: 0.791 g/cm³",
            "Radioactivity: Non-radioactive",
            "pH Value: Neutral (does not dissociate in water)"
        ]
    },
    {
        "input": "Acetylene",
        "output": [
            "Molecular Formula: C₂H₂",
            "Molar Mass: 26.04 g/mol",
            "Boiling Point: -84 °C",
            "Melting Point: -80.8 °C",
            "Water Solubility: Slightly soluble",
            "Biodegradability: Not readily biodegradable",
            "Flammability: Extremely flammable",
            "Corrosivity: Non-corrosive",
            "Density: 1.097 kg/m³ (gas)",
            "Radioactivity: Non-radioactive",
            "pH Value: Neutral (gas)"
        ]
    },
    {
        "input": "Acetylsalicylic Acid (Aspirin)",
        "output": [
            "Molecular Formula: C₉H₈O₄",
            "Molar Mass: 180.16 g/mol",
            "Boiling Point: Decomposes before boiling",
            "Melting Point: 136 °C",
            "Water Solubility: Slightly soluble",
            "Biodegradability: Readily biodegradable",
            "Flammability: Non-flammable",
            "Corrosivity: Not corrosive",
            "Density: 1.40 g/cm³",
            "Radioactivity: Non-radioactive",
            "pH Value: 2.5-3.5 (0.1 M solution)"
        ]
    },
    {
        "input": "Adenine",
        "output": [
            "Molecular Formula: C₅H₅N₅",
            "Molar Mass: 135.13 g/mol",
            "Boiling Point: Decomposes before boiling",
            "Melting Point: 360 °C",
            "Water Solubility: Slightly soluble",
            "Biodegradability: Readily biodegradable",
            "Flammability: Non-flammable",
            "Corrosivity: Not corrosive",
            "Density: 1.61 g/cm³",
            "Radioactivity: Non-radioactive",
            "pH Value: 9-10 (0.1 M solution)"
        ]
    },
    {
        "input": "Adenosine Triphosphate (ATP)",
        "output": [
            "Molecular Formula: C₁₀H₁₆N₅O₁₃P₃",
            "Molar Mass: 507.18 g/mol",
            "Boiling Point: Decomposes before boiling",
            "Melting Point: Decomposes before melting",
            "Water Solubility: Soluble",
            "Biodegradability: Readily biodegradable",
            "Flammability: Non-flammable",
            "Corrosivity: Not corrosive",
            "Density:  (complex molecule)",
            "Radioactivity: Non-radioactive",
            "pH Value: 6.5-7.5 (solution)"
        ]
    },
    {
        "input": "Adipic Acid",
        "output": [
            "Molecular Formula: C₆H₁₀O₄",
            "Molar Mass: 146.14 g/mol",
            "Boiling Point: Decomposes before boiling",
            "Melting Point: 152 °C",
            "Water Solubility: 1.5 g/100 mL at 20 °C",
            "Biodegradability: Readily biodegradable",
            "Flammability: Non-flammable",
            "Corrosivity: Not corrosive",
            "Density: 1.36 g/cm³",
            "Radioactivity: Non-radioactive",
            "pH Value: 2.0-2.5 (0.1 M solution)"
        ]
    },
    {
        "input": "Aluminum(III) Oxide (Al₂O₃)",
        "output": [
            "Molecular Formula: Al₂O₃",
            "Molar Mass: 101.96 g/mol",
            "Boiling Point: 2,977 °C",
            "Melting Point: 2,072 °C",
            "Water Solubility: Insoluble",
            "Biodegradability: Non-biodegradable",
            "Flammability: Non-flammable",
            "Corrosivity: Not corrosive",
            "Density: 3.95-4.1 g/cm³",
            "Radioactivity: Non-radioactive",
            "pH Value: Neutral (7)"
        ]
    },
    {
        "input": "Ammonia",
        "output": [
            "Molecular Formula: NH₃",
            "Molar Mass: 17.03 g/mol",
            "Boiling Point: -33.34 °C",
            "Melting Point: -77.73 °C",
            "Water Solubility: Highly soluble (482 g/L at 20 °C)",
            "Biodegradability: Readily biodegradable",
            "Flammability: Flammable",
            "Corrosivity: Corrosive",
            "Density: 0.73 g/cm³ (gas)",
            "Radioactivity: Non-radioactive",
            "pH Value: 11.6 (1 M solution)"
        ]
    },
    {
        "input": "Ascorbic Acid (Vitamin C)",
        "output": [
            "Molecular Formula: C₆H₈O₆",
            "Molar Mass: 176.12 g/mol",
            "Boiling Point: Decomposes before boiling",
            "Melting Point: 190-192 °C",
            "Water Solubility: 330 g/L at 20 °C",
            "Biodegradability: Readily biodegradable",
            "Flammability: Non-flammable",
            "Corrosivity: Not corrosive",
            "Density: 1.65 g/cm³",
            "Radioactivity: Non-radioactive",
            "pH Value: 2.1-2.6 (5% solution)"
        ]
    },
    {
        "input": "Aspartame",
        "output": [
            "Molecular Formula: C₁₄H₁₈N₂O₅",
            "Molar Mass: 294.31 g/mol",
            "Boiling Point: Decomposes before boiling",
            "Melting Point: 246-247 °C",
            "Water Solubility: 10 g/L at 25 °C",
            "Biodegradability: Readily biodegradable",
            "Flammability: Non-flammable",
            "Corrosivity: Not corrosive",
            "Density: 1.347 g/cm³",
            "Radioactivity: Non-radioactive",
            "pH Value: 4.5-6 (0.8% solution)"
        ]
    },
    {
        "input": "Benzene",
        "output": [
            "Molecular Formula: C₆H₆",
            "Molar Mass: 78.11 g/mol",
            "Boiling Point: 80.1 °C",
            "Melting Point: 5.5 °C",
            "Water Solubility: 1.79 g/L at 25 °C",
            "Biodegradability: Readily biodegradable",
            "Flammability: Highly flammable",
            "Corrosivity: Not corrosive",
            "Density: 0.876 g/cm³",
            "Radioactivity: Non-radioactive",
            "pH Value: Neutral (does not dissociate in water)"
        ]
    },
    {
        "input": "Benzoic Acid",
        "output": [
            "Molecular Formula: C₇H₆O₂",
            "Molar Mass: 122.12 g/mol",
            "Boiling Point: 249 °C",
            "Melting Point: 122 °C",
            "Water Solubility: 3.4 g/L at 25 °C",
            "Biodegradability: Readily biodegradable",
            "Flammability: Flammable",
            "Corrosivity: Not corrosive",
            "Density: 1.27 g/cm³",
            "Radioactivity: Non-radioactive",
            "pH Value: 2.8 (saturated solution)"
        ]
    },
    {
        "input": "Biphenyl and PCBs (Polychlorinated Biphenyls)",
        "output": [
            "Molecular Formula: C₁₂H₁₀",
            "Molar Mass: 154.21 g/mol",
            "Boiling Point: 255 °C",
            "Melting Point: 69 °C",
            "Water Solubility: 6.94 mg/L at 25 °C",
            "Biodegradability: PCBs are not readily biodegradable; biphenyl is biodegradable",
            "Flammability: Flammable",
            "Corrosivity: Not corrosive",
            "Density: 1.04 g/cm³",
            "Radioactivity: Non-radioactive",
            "pH Value: Neutral (biphenyl)"
        ]
    },
    {
        "input": "Butane",
        "output": [
            "Molecular Formula: C₄H₁₀",
            "Molar Mass: 58.12 g/mol",
            "Boiling Point: -1 °C",
            "Melting Point: -138 °C",
            "Water Solubility: 61 mg/L at 20 °C",
            "Biodegradability: Readily biodegradable",
            "Flammability: Highly flammable",
            "Corrosivity: Non-corrosive",
            "Density: 0.579 g/L (gas)",
            "Radioactivity: Non-radioactive",
            "pH Value: Neutral (does not dissociate in water)"
        ]
    },
    {
        "input": "Butene",
        "output": [
            "Molecular Formula: C₄H₈",
            "Molar Mass: 56.11 g/mol",
            "Boiling Point: -6.3 °C",
            "Melting Point: -185 °C",
            "Water Solubility: Slightly soluble",
            "Biodegradability: Readily biodegradable",
            "Flammability: Highly flammable",
            "Corrosivity: Non-corrosive",
            "Density: 0.62 g/L (gas)",
            "Radioactivity: Non-radioactive",
            "pH Value: Neutral (does not dissociate in water)"
        ]
    },
    {
        "input": "Butyric Acid and Fatty Acids",
        "output": [
            "Molecular Formula (Butyric Acid): C₄H₈O₂",
            "Molar Mass (Butyric Acid): 88.11 g/mol",
            "Boiling Point (Butyric Acid): 163.5 °C",
            "Melting Point (Butyric Acid): -5 °C",
            "Water Solubility (Butyric Acid): Miscible",
            "Biodegradability: Readily biodegradable",
            "Flammability: Flammable",
            "Corrosivity: Corrosive to metals and skin",
            "Density (Butyric Acid): 0.96 g/cm³",
            "Radioactivity: Non-radioactive",
            "pH Value: 3.8 (0.1 M solution)"
        ]
    },
    {
        "input": "Caffeine",
        "output": [
            "Molecular Formula: C₈H₁₀N₄O₂",
            "Molar Mass: 194.19 g/mol",
            "Boiling Point: Sublimes at 178 °C",
            "Melting Point: 238 °C",
            "Water Solubility: 2.17 g/100 mL at 25 °C",
            "Biodegradability: Readily biodegradable",
            "Flammability: Non-flammable",
            "Corrosivity: Not corrosive",
            "Density: 1.23 g/cm³",
            "Radioactivity: Non-radioactive",
            "pH Value: 6.9 (1% solution)"
        ]
    },
    {
        "input": "Calcium Carbonate",
        "output": [
            "Molecular Formula: CaCO₃",
            "Molar Mass: 100.09 g/mol",
            "Boiling Point: Decomposes at 1,339 °C",
            "Melting Point: 825°C",
            "Water Solubility: 0.013 g/L at 25 °C",
            "Biodegradability: Non-biodegradable",
            "Flammability: Non-flammable",
            "Corrosivity: Not corrosive",
            "Density: 2.71 g/cm³",
            "Radioactivity: Non-radioactive",
            "pH Value: 9.91 (saturated solution)"
        ]
    },
    {
        "input": "Calcium Oxide (Lime)",
        "output": [
            "Molecular Formula: CaO",
            "Molar Mass: 56.08 g/mol",
            "Boiling Point: 2,850 °C",
            "Melting Point: 2,613 °C",
            "Water Solubility: 1.73 g/L at 20 °C",
            "Biodegradability: Non-biodegradable",
            "Flammability: Non-flammable",
            "Corrosivity: Corrosive",
            "Density: 3.34 g/cm³",
            "Radioactivity: Non-radioactive",
            "pH Value: 12.4 (saturated solution)"
        ]
    },
    {
        "input": "Calcium Sulfate (Gypsum)",
        "output": [
            "Molecular Formula: CaSO₄",
            "Molar Mass: 136.14 g/mol",
            "Boiling Point: Decomposes before boiling",
            "Melting Point: 1,450 °C",
            "Water Solubility: 0.209 g/100 mL at 25 °C",
            "Biodegradability: Non-biodegradable",
            "Flammability: Non-flammable",
            "Corrosivity: Not corrosive",
            "Density: 2.32 g/cm³",
            "Radioactivity: Non-radioactive",
            "pH Value: 7.7 (saturated solution)"
        ]
    },
    {
        "input": "Carbon Dioxide",
        "output": [
            "Molecular Formula: CO₂",
            "Molar Mass: 44.01 g/mol",
            "Boiling Point: Sublimes at -78.5 °C",
            "Melting Point: Sublimes at -78.5 °C (solid phase directly to gas)",
            "Water Solubility: 1.45 g/L at 25 °C",
            "Biodegradability:  (natural part of carbon cycle)",
            "Flammability: Non-flammable",
            "Corrosivity: Not corrosive",
            "Density: 1.98 kg/m³ (gas at STP)",
            "Radioactivity: Non-radioactive",
            "pH Value: 3.7 (saturated solution, carbonic acid)"
        ]
    },
    {
        "input": "Carbon Monoxide",
        "output": [
            "Molecular Formula: CO",
            "Molar Mass: 28.01 g/mol",
            "Boiling Point: -191.5 °C",
            "Melting Point: -205.1 °C",
            "Water Solubility: 2.3 g/L at 25 °C",
            "Biodegradability:  (oxidizes to CO₂)",
            "Flammability: Highly flammable",
            "Corrosivity: Not corrosive",
            "Density: 1.25 kg/m³ (gas at STP)",
            "Radioactivity: Non-radioactive",
            "pH Value: Neutral (does not dissociate in water)"
        ]
    },
    {
        "input": "Chloroform",
        "output": [
            "Molecular Formula: CHCl₃",
            "Molar Mass: 119.38 g/mol",
            "Boiling Point: 61.2 °C",
            "Melting Point: -63.5 °C",
            "Water Solubility: 8.09 g/L at 20 °C",
            "Biodegradability: Readily biodegradable",
            "Flammability: Non-flammable",
            "Corrosivity: Not corrosive",
            "Density: 1.489 g/cm³",
            "Radioactivity: Non-radioactive",
            "pH Value: Neutral (7)"
        ]
    },
    {
        "input": "Chlorophyll",
        "output": [
            "Molecular Formula: C₅₅H₇₂MgN₄O₅ (Chlorophyll a)",
            "Molar Mass: 893.49 g/mol (Chlorophyll a)",
            "Boiling Point: Decomposes before boiling",
            "Melting Point: Decomposes before melting",
            "Water Solubility: Insoluble",
            "Biodegradability: Readily biodegradable",
            "Flammability: Non-flammable",
            "Corrosivity: Not corrosive",
            "Density: (complex molecule)",
            "Radioactivity: Non-radioactive",
            "pH Value: (depends on solution and form)"
        ]
    },
    {
        "input": "Cholesterol",
        "output": [
            "Molecular Formula: C₂₇H₄₆O",
            "Molar Mass: 386.65 g/mol",
            "Boiling Point: Decomposes before boiling",
            "Melting Point: 148-150 °C",
            "Water Solubility: Insoluble",
            "Biodegradability: Readily biodegradable",
            "Flammability: Non-flammable",
            "Corrosivity: Not corrosive",
            "Density: 1.067 g/cm³",
            "Radioactivity: Non-radioactive",
            "pH Value: Neutral (pure form)"
        ]
    },
    {
        "input": "Citric Acid",
        "output": [
            "Molecular Formula: C₆H₈O₇",
            "Molar Mass: 192.12 g/mol",
            "Boiling Point: Decomposes before boiling",
            "Melting Point: 153 °C",
            "Water Solubility: 59.2 g/100 mL at 25 °C",
            "Biodegradability: Readily biodegradable",
            "Flammability: Non-flammable",
            "Corrosivity: Slightly corrosive",
            "Density: 1.66 g/cm³",
            "Radioactivity: Non-radioactive",
            "pH Value: 2.2 (5% solution)"
        ]
    },
    {
        "input": "Cocaine",
        "output": [
            "Molecular Formula: C₁₇H₂₁NO₄",
            "Molar Mass: 303.35 g/mol",
            "Boiling Point: Decomposes before boiling",
            "Melting Point: 98 °C",
            "Water Solubility: 1.8 g/L at 20 °C",
            "Biodegradability: Readily biodegradable",
            "Flammability: Non-flammable",
            "Corrosivity: Not corrosive",
            "Density: 1.22 g/cm³",
            "Radioactivity: Non-radioactive",
            "pH Value:  (depends on form)"
        ]
    },
    {
        "input": "Cytosine",
        "output": [
            "Molecular Formula: C₄H₅N₃O",
            "Molar Mass: 111.10 g/mol",
            "Boiling Point: Decomposes before boiling",
            "Melting Point: 320-325 °C",
            "Water Solubility: Soluble",
            "Biodegradability: Readily biodegradable",
            "Flammability: Non-flammable",
            "Corrosivity: Not corrosive",
            "Density: 1.32 g/cm³",
            "Radioactivity: Non-radioactive",
            "pH Value: 6-7 (depends on solution)"
        ]
    },
    {
        "input": "Thymine",
        "output": [
            "Molecular Formula: C₅H₆N₂O₂",
            "Molar Mass: 126.11 g/mol",
            "Boiling Point: Decomposes before boiling",
            "Melting Point: 316-317 °C",
            "Water Solubility: Slightly soluble",
            "Biodegradability: Readily biodegradable",
            "Flammability: Non-flammable",
            "Corrosivity: Not corrosive",
            "Density: 1.23 g/cm³",
            "Radioactivity: Non-radioactive",
            "pH Value: 6-7 (depends on solution)"
        ]
    },
    {
        "input": "Uracil",
        "output": [
            "Molecular Formula: C₄H₄N₂O₂",
            "Molar Mass: 112.09 g/mol",
            "Boiling Point: Decomposes before boiling",
            "Melting Point: 335 °C",
            "Water Solubility: Soluble",
            "Biodegradability: Readily biodegradable",
            "Flammability: Non-flammable",
            "Corrosivity: Not corrosive",
            "Density: 1.32 g/cm³",
            "Radioactivity: Non-radioactive",
            "pH Value: 6-7 (depends on solution)"
        ]
    },
    {
        "input": "DDT (Dichlorodiphenyltrichloroethane)",
        "output": [
            "Molecular Formula: C₁₄H₉Cl₅",
            "Molar Mass: 354.49 g/mol",
            "Boiling Point: 260 °C",
            "Melting Point: 108.5 °C",
            "Water Solubility: 0.025 mg/L at 25 °C",
            "Biodegradability: Not readily biodegradable",
            "Flammability: Non-flammable",
            "Corrosivity: Not corrosive",
            "Density: 1.68 g/cm³",
            "Radioactivity: Non-radioactive",
            "pH Value: Neutral (does not dissociate in water)"
        ]
    },
    {
        "input": "DEET (N,N-Diethyl-meta-toluamide)",
        "output": [
            "Molecular Formula: C₁₂H₁₇NO",
            "Molar Mass: 191.27 g/mol",
            "Boiling Point: 288 °C",
            "Melting Point: -45 °C",
            "Water Solubility: 0.86 g/L at 25 °C",
            "Biodegradability: Not readily biodegradable",
            "Flammability: Flammable"
        ]
    },
    {
        "input": "Dichlorodifluoromethane (CFC-12)",
        "output": [
            "Molecular Formula: CCl₂F₂",
            "Molar Mass: 120.91 g/mol",
            "Boiling Point: -29.8 °C",
            "Melting Point: -158 °C",
            "Water Solubility: 0.22 g/L at 25 °C",
            "Biodegradability: Non-biodegradable",
            "Flammability: Non-flammable",
            "Corrosivity: Not corrosive",
            "Density: 1.486 g/cm³ (at 25 °C)",
            "Radioactivity: Non-radioactive",
            "pH Value: Neutral"
        ]
    },
    {
        "input": "Dopamine",
        "output": [
            "Molecular Formula: C₈H₁₁NO₂",
            "Molar Mass: 153.18 g/mol",
            "Boiling Point: Decomposes before boiling",
            "Melting Point: 128-130 °C",
            "Water Solubility: 60 g/L at 25 °C",
            "Biodegradability: Readily biodegradable",
            "Flammability: Non-flammable",
            "Corrosivity: Not corrosive",
            "Density: 1.26 g/cm³",
            "Radioactivity: Non-radioactive",
            "pH Value: 5-6 (depends on solution)"
        ]
    },
    {
        "input": "Epinephrine (Adrenaline)",
        "output": [
            "Molecular Formula: C₉H₁₃NO₃",
            "Molar Mass: 183.20 g/mol",
            "Boiling Point: Decomposes before boiling",
            "Melting Point: 211-212 °C",
            "Water Solubility: Soluble",
            "Biodegradability: Readily biodegradable",
            "Flammability: Non-flammable",
            "Corrosivity: Not corrosive",
            "Density: 1.28 g/cm³",
            "Radioactivity: Non-radioactive",
            "pH Value: 2.5-3.5 (0.1% solution)"
        ]
    },
    {
        "input": "Ethane",
        "output": [
            "Molecular Formula: C₂H₆",
            "Molar Mass: 30.07 g/mol",
            "Boiling Point: -88.6 °C",
            "Melting Point: -182.8 °C",
            "Water Solubility: 60 mg/L at 25 °C",
            "Biodegradability: Readily biodegradable",
            "Flammability: Highly flammable",
            "Corrosivity: Non-corrosive",
            "Density: 1.356 kg/m³ (gas at STP)",
            "Radioactivity: Non-radioactive",
            "pH Value: Neutral (does not dissociate in water)"
        ]
    },
    {
        "input": "Ethene (Ethylene)",
        "output": [
            "Molecular Formula: C₂H₄",
            "Molar Mass: 28.05 g/mol",
            "Boiling Point: -103.7 °C",
            "Melting Point: -169.2 °C",
            "Water Solubility: 131 mg/L at 25 °C",
            "Biodegradability: Readily biodegradable",
            "Flammability: Highly flammable",
            "Corrosivity: Non-corrosive",
            "Density: 1.178 kg/m³ (gas at STP)",
            "Radioactivity: Non-radioactive",
            "pH Value: Neutral (does not dissociate in water)"
        ]
    },
    {
        "input": "Ether",
        "output": [
            "Molecular Formula: C₄H₁₀O (Diethyl ether)",
            "Molar Mass: 74.12 g/mol",
            "Boiling Point: 34.6 °C",
            "Melting Point: -116.3 °C",
            "Water Solubility: 6.9 g/L at 25 °C",
            "Biodegradability: Readily biodegradable",
            "Flammability: Highly flammable",
            "Corrosivity: Non-corrosive",
            "Density: 0.7134 g/cm³",
            "Radioactivity: Non-radioactive",
            "pH Value: Neutral (does not dissociate in water)"
        ]
    },
    {
        "input": "Ethyl Alcohol (Ethanol)",
        "output": [
            "Molecular Formula: C₂H₅OH",
            "Molar Mass: 46.07 g/mol",
            "Boiling Point: 78.37 °C",
            "Melting Point: -114.1 °C",
            "Water Solubility: Miscible",
            "Biodegradability: Readily biodegradable",
            "Flammability: Highly flammable",
            "Corrosivity: Non-corrosive",
            "Density: 0.789 g/cm³",
            "Radioactivity: Non-radioactive",
            "pH Value: Neutral (7)"
        ]
    },
    {
        "input": "Ethylenediaminetetraacetic Acid (EDTA)",
        "output": [
            "Molecular Formula: C₁₀H₁₆N₂O₈",
            "Molar Mass: 292.24 g/mol",
            "Boiling Point: Decomposes before boiling",
            "Melting Point: 250 °C",
            "Water Solubility: 0.05 g/L at 25 °C",
            "Biodegradability: Not readily biodegradable",
            "Flammability: Non-flammable",
            "Corrosivity: Not corrosive",
            "Density: 0.86 g/cm³",
            "Radioactivity: Non-radioactive",
            "pH Value: 2.5 (0.1 M solution)"
        ]
    },
    {
        "input": "Fluoxetine (Prozac)",
        "output": [
            "Molecular Formula: C₁₇H₁₈F₃NO",
            "Molar Mass: 309.33 g/mol",
            "Boiling Point: Decomposes before boiling",
            "Melting Point: 179-182 °C",
            "Water Solubility: 14 mg/L at 25 °C",
            "Biodegradability: Not readily biodegradable",
            "Flammability: Non-flammable",
            "Corrosivity: Not corrosive",
            "Density: 1.28 g/cm³",
            "Radioactivity: Non-radioactive",
            "pH Value: Neutral (depends on form and solution)"
        ]
    },
    {
        "input": "Formaldehyde",
        "output": [
            "Molecular Formula: CH₂O",
            "Molar Mass: 30.03 g/mol",
            "Boiling Point: -19 °C (gas)",
            "Melting Point: -92 °C",
            "Water Solubility: Miscible",
            "Biodegradability: Readily biodegradable",
            "Flammability: Highly flammable",
            "Corrosivity: Corrosive",
            "Density: 0.815 g/cm³ (liquid)",
            "Radioactivity: Non-radioactive",
            "pH Value: 2.8-4 (aqueous solution)"
        ]
    },
    {
        "input": "Formic Acid",
        "output": [
            "Molecular Formula: CH₂O₂",
            "Molar Mass: 46.03 g/mol",
            "Boiling Point: 100.8 °C",
            "Melting Point: 8.4 °C",
            "Water Solubility: Miscible",
            "Biodegradability: Readily biodegradable",
            "Flammability: Flammable",
            "Corrosivity: Corrosive",
            "Density: 1.22 g/cm³",
            "Radioactivity: Non-radioactive",
            "pH Value: 2.4 (1% solution)"
        ]
    },
    {
        "input": "Glucose",
        "output": [
            "Molecular Formula: C₆H₁₂O₆",
            "Molar Mass: 180.16 g/mol",
            "Boiling Point: Decomposes before boiling",
            "Melting Point: 146 °C",
            "Water Solubility: 909 g/L at 25 °C",
            "Biodegradability: Readily biodegradable",
            "Flammability: Non-flammable",
            "Corrosivity: Not corrosive",
            "Density: 1.54 g/cm³",
            "Radioactivity: Non-radioactive",
            "pH Value: 6-7 (neutral in solution)"
        ]
    },
    {
        "input": "Glycerol (Glycerin)",
        "output": [
            "Molecular Formula: C₃H₈O₃",
            "Molar Mass: 92.09 g/mol",
            "Boiling Point: 290 °C",
            "Melting Point: 17.8 °C",
            "Water Solubility: Miscible",
            "Biodegradability: Readily biodegradable",
            "Flammability: Non-flammable",
            "Corrosivity: Not corrosive",
            "Density: 1.261 g/cm³",
            "Radioactivity: Non-radioactive",
            "pH Value: 5.5-7.5 (depends on solution)"
        ]
    },
    {
        "input": "Guanine",
        "output": [
            "Molecular Formula: C₅H₅N₅O",
            "Molar Mass: 151.13 g/mol",
            "Boiling Point: Decomposes before boiling",
            "Melting Point: 350 °C (decomposes)",
            "Water Solubility: Slightly soluble",
            "Biodegradability: Readily biodegradable",
            "Flammability: Non-flammable",
            "Corrosivity: Not corrosive",
            "Density: 2.2 g/cm³",
            "Radioactivity: Non-radioactive",
            "pH Value: 7 (neutral in solution)"
        ]
    },
    {
        "input": "Hydrochloric Acid",
        "output": [
            "Molecular Formula: HCl",
            "Molar Mass: 36.46 g/mol",
            "Boiling Point: -85.05 °C (gas)",
            "Melting Point: -114.2 °C (gas)",
            "Water Solubility: Miscible",
            "Biodegradability:  (dissociates in water)",
            "Flammability: Non-flammable",
            "Corrosivity: Highly corrosive",
            "Density: 1.18 g/cm³ (concentrated solution)",
            "Radioactivity: Non-radioactive",
            "pH Value: <1 "
        ]
    },
    {
        "input": "Hydrogen Peroxide",
        "output": [
            "Molecular Formula: H₂O₂",
            "Molar Mass: 34.01 g/mol",
            "Boiling Point: 150.2 °C",
            "Melting Point: -0.43 °C",
            "Water Solubility: Miscible",
            "Biodegradability: Readily biodegradable",
            "Flammability: Non-flammable (but strong oxidizer)",
            "Corrosivity: Corrosive",
            "Density: 1.45 g/cm³ (concentrated solution)",
            "Radioactivity: Non-radioactive",
            "pH Value: 4.5 (30% solution)"
        ]
    },
    {
        "input": "Hydrogen Sulfide",
        "output": [
            "Molecular Formula: H₂S",
            "Molar Mass: 34.08 g/mol",
            "Boiling Point: -60.2 °C",
            "Melting Point: -82 °C",
            "Water Solubility: 4 g/L at 20 °C",
            "Biodegradability: Readily biodegradable",
            "Flammability: Highly flammable",
            "Corrosivity: Corrosive",
            "Density: 1.539 kg/m³ (gas at STP)",
            "Radioactivity: Non-radioactive",
            "pH Value: 4-5 (weak acid)"
        ]
    },
    {
        "input": "Ibuprofen",
        "output": [
            "Molecular Formula: C₁₃H₁₈O₂",
            "Molar Mass: 206.29 g/mol",
            "Boiling Point: 157 °C (at 4 mmHg)",
            "Melting Point: 75-78 °C",
            "Water Solubility: 0.021 g/L at 25 °C",
            "Biodegradability: Readily biodegradable",
            "Flammability: Non-flammable",
            "Corrosivity: Not corrosive",
            "Density: 1.18 g/cm³",
            "Radioactivity: Non-radioactive",
            "pH Value: 4-5 (in solution)"
        ]
    },
    {
        "input": "Indigo",
        "output": [
            "Molecular Formula: C₁₆H₁₀N₂O₂",
            "Molar Mass: 262.27 g/mol",
            "Boiling Point: Decomposes before boiling",
            "Melting Point: 390-392 °C",
            "Water Solubility: Insoluble",
            "Biodegradability: Readily biodegradable",
            "Flammability: Non-flammable",
            "Corrosivity: Not corrosive",
            "Density: 1.4 g/cm³",
            "Radioactivity: Non-radioactive",
            "pH Value: Neutral (7)"
        ]
    },
    {
        "input": "Insulin",
        "output": [
            "Molecular Formula: C₂₅₇H₃₈₃N₆₅O₇₇S₆",
            "Molar Mass: 5808",
            "Boiling Point: Decomposes before boiling",
            "Melting Point: Decomposes before melting",
            "Water Solubility: Soluble",
            "Biodegradability: Readily biodegradable",
            "Flammability: Non-flammable",
            "Corrosivity: Not corrosive",
            "Density:(complex protein)",
            "Radioactivity: Non-radioactive",
            "pH Value: 2.8-3.5"
        ]
    },
    {
        "input": "Iron(III) Oxide",
        "output": [
            "Molecular Formula: Fe₂O₃",
            "Molar Mass: 159.69",
            "Boiling Point: Decomposes before boiling",
            "Melting Point: 1565",
            "Water Solubility: Insoluble",
            "Biodegradability: Non-biodegradable",
            "Flammability: Non-flammable",
            "Corrosivity: Non-corrosive",
            "Density: 5.24",
            "Radioactivity: Non-radioactive",
            "pH Value: (insoluble in water)"
        ]
    },
    {
        "input": "Isooctane",
        "output": [
            "Molecular Formula: C₈H₁₈",
            "Molar Mass: 114.23",
            "Boiling Point: 99.3",
            "Melting Point: -107.38",
            "Water Solubility: Insoluble",
            "Biodegradability: Readily biodegradable",
            "Flammability: Highly flammable",
            "Corrosivity: Non-corrosive",
            "Density: 0.692",
            "Radioactivity: Non-radioactive",
            "pH Value: Neutral (does not dissociate in water)"
        ]
    },
    {
        "input": "Isoprene",
        "output": [
            "Molecular Formula: C₅H₈",
            "Molar Mass: 68.12",
            "Boiling Point: 34",
            "Melting Point: -145.95",
            "Water Solubility: Insoluble",
            "Biodegradability: Readily biodegradable",
            "Flammability: Highly flammable",
            "Corrosivity: Non-corrosive",
            "Density: 0.681",
            "Radioactivity: Non-radioactive",
            "pH Value: Neutral (does not dissociate in water)"
        ]
    },
    {
        "input": "Methane",
        "output": [
            "Molecular Formula: CH₄",
            "Molar Mass: 16.04",
            "Boiling Point: -161.5",
            "Melting Point: -182.5",
            "Water Solubility: 22.7 mg/L at 25 °C",
            "Biodegradability: Readily biodegradable",
            "Flammability: Highly flammable",
            "Corrosivity: Non-corrosive",
            "Density: 0.717",
            "Radioactivity: Non-radioactive",
            "pH Value: Neutral (does not dissociate in water)"
        ]
    },
    {
        "input": "Methyl Alcohol (Methanol)",
        "output": [
            "Molecular Formula: CH₃OH",
            "Molar Mass: 32.04",
            "Boiling Point: 64.7",
            "Melting Point: -97.6",
            "Water Solubility: Miscible",
            "Biodegradability: Readily biodegradable",
            "Flammability: Highly flammable",
            "Corrosivity: Non-corrosive",
            "Density: 0.791",
            "Radioactivity: Non-radioactive",
            "pH Value: Neutral (7)"
        ]
    },
    {
        "input": "Methylphenidate (Ritalin)",
        "output": [
            "Molecular Formula: C₁₄H₁₉NO₂",
            "Molar Mass: 233.31",
            "Boiling Point: Decomposes before boiling",
            "Melting Point: 224-226",
            "Water Solubility: 7.6 mg/mL at 25 °C",
            "Biodegradability: Not readily biodegradable",
            "Flammability: Non-flammable",
            "Corrosivity: Not corrosive",
            "Density: 1.13",
            "Radioactivity: Non-radioactive",
            "pH Value: Neutral (7)"
        ]
    },
    {
        "input": "Monosodium Glutamate (MSG)",
        "output": [
            "Molecular Formula: C₅H₈NNaO₄",
            "Molar Mass: 169.11",
            "Boiling Point: Decomposes before boiling",
            "Melting Point: 232",
            "Water Solubility: 740 g/L at 25 °C",
            "Biodegradability: Readily biodegradable",
            "Flammability: Non-flammable",
            "Corrosivity: Non-corrosive",
            "Density: 1.62",
            "Radioactivity: Non-radioactive",
            "pH Value: 6.7-7.2 (neutral in solution)"
        ]
    },
    {
        "input": "Naphthalene",
        "output": [
            "Molecular Formula: C₁₀H₈",
            "Molar Mass: 128.17",
            "Boiling Point: 218",
            "Melting Point: 80.26",
            "Water Solubility: 31.7 mg/L at 25 °C",
            "Biodegradability: Not readily biodegradable",
            "Flammability: Flammable",
            "Corrosivity: Non-corrosive",
            "Density: 1.14",
            "Radioactivity: Non-radioactive",
            "pH Value: Neutral (7)"
        ]
    },
    {
        "input": "Nitric Acid",
        "output": [
            "Molecular Formula: HNO₃",
            "Molar Mass: 63.01",
            "Boiling Point: 83",
            "Melting Point: -42",
            "Water Solubility: Miscible",
            "Biodegradability:  (dissociates in water)",
            "Flammability: Non-flammable",
            "Corrosivity: Highly corrosive",
            "Density: 1.51",
            "Radioactivity: Non-radioactive",
            "pH Value: <1 "
        ]
    },
    {
        "input": "Nitric Oxide",
        "output": [
            "Molecular Formula: NO",
            "Molar Mass: 30.01",
            "Boiling Point: -152",
            "Melting Point: -164",
            "Water Solubility: Slightly soluble",
            "Biodegradability: Readily biodegradable",
            "Flammability: Non-flammable",
            "Corrosivity: Non-corrosive",
            "Density: 1.3402",
            "Radioactivity: Non-radioactive",
            "pH Value:  (gas)"
        ]
    },
    {
        "input": "Nitrogen Dioxide",
        "output": [
            "Molecular Formula: NO₂",
            "Molar Mass: 46.01",
            "Boiling Point: 21",
            "Melting Point: -11.2",
            "Water Solubility: 0.01 g/mL at 20 °C",
            "Biodegradability: Readily biodegradable",
            "Flammability: Non-flammable",
            "Corrosivity: Corrosive",
            "Density: 1.88",
            "Radioactivity: Non-radioactive",
            "pH Value: 3.4-3.6 (in water)"
        ]
    },
    {
        "input": "Nitrous Oxide",
        "output": [
            "Molecular Formula: N₂O",
            "Molar Mass: 44.01",
            "Boiling Point: -88.48",
            "Melting Point: -90.81",
            "Water Solubility: 0.122 g/100 mL at 20 °C",
            "Biodegradability: (gas in atmosphere)",
            "Flammability: Non-flammable",
            "Corrosivity: Non-corrosive",
            "Density: 1.977",
            "Radioactivity: Non-radioactive",
            "pH Value: 7"
        ]
    },
    {
        "input": "Nitroglycerin",
        "output": [
            "Molecular Formula: C₃H₅N₃O₉",
            "Molar Mass: 227.09",
            "Boiling Point: Decomposes before boiling",
            "Melting Point: 13.5",
            "Water Solubility: 1.35 g/100 mL at 20 °C",
            "Biodegradability: Readily biodegradable",
            "Flammability: Highly flammable",
            "Corrosivity: Non-corrosive",
            "Density: 1.6",
            "Radioactivity: Non-radioactive",
            "pH Value: Neutral (7)"
        ]
    },
    {
        "input": "Norethindrone",
        "output": [
            "Molecular Formula: C₂₀H₂₆O₂",
            "Molar Mass: 298.42",
            "Boiling Point: Decomposes before boiling",
            "Melting Point: 203-204",
            "Water Solubility: Practically insoluble",
            "Biodegradability: Not readily biodegradable",
            "Flammability: Non-flammable",
            "Corrosivity: Non-corrosive",
            "Density: 1.13",
            "Radioactivity: Non-radioactive",
            "pH Value: Neutral (7)"
        ]
    },
    {
        "input": "Penicillin",
        "output": [
            "Molecular Formula: C₁₆H₁₈N₂O₄S",
            "Molar Mass: 334.39",
            "Boiling Point: Decomposes before boiling",
            "Melting Point: 214",
            "Water Solubility: Soluble",
            "Biodegradability: Readily biodegradable",
            "Flammability: Non-flammable",
            "Corrosivity: Non-corrosive",
            "Density: 1.28",
            "Radioactivity: Non-radioactive",
            "pH Value: Neutral (7)"
        ]
    },
    {
        "input": "Phenol",
        "output": [
            "Molecular Formula: C₆H₆O",
            "Molar Mass: 94.11",
            "Boiling Point: 181.7",
            "Melting Point: 40.5",
            "Water Solubility: 8.3 g/100 mL at 20 °C",
            "Biodegradability: Readily biodegradable",
            "Flammability: Flammable",
            "Corrosivity: Corrosive",
            "Density: 1.07",
            "Radioactivity: Non-radioactive",
            "pH Value: 5.4 (0.1M solution)"
        ]
    },
    {
        "input": "Phosphoric Acid",
        "output": [
            "Molecular Formula: H₃PO₄",
            "Molar Mass: 98",
            "Boiling Point: 158",
            "Melting Point: 42.35",
            "Water Solubility: Miscible",
            "Biodegradability:  (dissociates in water)",
            "Flammability: Non-flammable",
            "Corrosivity: Highly corrosive",
            "Density: 1.88",
            "Radioactivity: Non-radioactive",
            "pH Value: <1 "
        ]
    },
    {
        "input": "Piperine",
        "output": [
            "Molecular Formula: C₁₇H₁₉NO₃",
            "Molar Mass: 285.34",
            "Boiling Point: Decomposes before boiling",
            "Melting Point: 128-130",
            "Water Solubility: Insoluble",
            "Biodegradability: Readily biodegradable",
            "Flammability: Non-flammable",
            "Corrosivity: Non-corrosive",
            "Density: 1.193",
            "Radioactivity: Non-radioactive",
            "pH Value: Neutral (7)"
        ]
    },
    {
        "input": "Potassium Carbonate",
        "output": [
            "Molecular Formula: K₂CO₃",
            "Molar Mass: 138.21",
            "Boiling Point: Decomposes before boiling",
            "Melting Point: 891",
            "Water Solubility: 1100 g/L at 20 °C",
            "Biodegradability: (inorganic salt)",
            "Flammability: Non-flammable",
            "Corrosivity: Corrosive",
            "Density: 2.43",
            "Radioactivity: Non-radioactive",
            "pH Value: 11.5 "
        ]
    },
    {
        "input": "Potassium Nitrate",
        "output": [
            "Molecular Formula: KNO₃",
            "Molar Mass: 101.1",
            "Boiling Point: Decomposes before boiling",
            "Melting Point: 334",
            "Water Solubility: 316 g/L at 20 °C",
            "Biodegradability: (inorganic salt)",
            "Flammability: Non-flammable",
            "Corrosivity: Non-corrosive",
            "Density: 2.11",
            "Radioactivity: Non-radioactive",
            "pH Value: 7 "
        ]
    },
    {
        "input": "Nicotine",
        "output": [
            "Molecular Formula: C₁₀H₁₄N₂",
            "Molar Mass: 162.23",
            "Boiling Point: 247",
            "Melting Point: -79",
            "Water Solubility: 1 g/100 mL at 25 °C",
            "Biodegradability: Readily biodegradable",
            "Flammability: Flammable",
            "Corrosivity: Non-corrosive",
            "Density: 1.01",
            "Radioactivity: Non-radioactive",
            "pH Value: 10.2 (in solution)"
        ]
    },
    {
        "input": "Propane",
        "output": [
            "name: Propane",
            "molecularFormula: C₃H₈",
            "molarMass: 44.1",
            "Boiling Point: -42.1",
            "meltingPoint: -188",
            "waterSolubility: 0.01",
            "biodegradability: Readily biodegradable",
            "flammability: Highly flammable",
            "corrosivity: Non-corrosive",
            "density: 2.0098",
            "radioactivity: Non-radioactive",
            "pHValue: 7"
        ]
    },
    {
        "input": "Propylene",
        "output": [
            "name: Propylene",
            "molecularFormula: C₃H₆",
            "molarMass: 42.08",
            "Boiling Point: -47.6",
            "meltingPoint: -185.2",
            "waterSolubility: Insoluble",
            "biodegradability: Readily biodegradable",
            "flammability: Highly flammable",
            "corrosivity: Non-corrosive",
            "density: 0.493",
            "radioactivity: Non-radioactive",
            "pHValue: 7"
        ]
    },
    {
        "input": "Quinine",
        "output": [
            "name: Quinine",
            "molecularFormula: C₂₀H₂₄N₂O₂",
            "molarMass: 324.42",
            "Boiling Point: Decomposes before boiling",
            "meltingPoint: 177-179",
            "waterSolubility: Slightly soluble",
            "biodegradability: Readily biodegradable",
            "flammability: Non-flammable",
            "corrosivity: Non-corrosive",
            "density: 1.18",
            "radioactivity: Non-radioactive",
            "pHValue: Basic (alkaline)"
        ]
    },
    {
        "input": "Saccharin",
        "output": [
            "name: Saccharin",
            "molecularFormula: C₇H₅NO₃S",
            "molarMass: 183.18",
            "Boiling Point: Decomposes before boiling",
            "meltingPoint: 228-229",
            "waterSolubility: 1.2",
            "biodegradability: Readily biodegradable",
            "flammability: Non-flammable",
            "corrosivity: Non-corrosive",
            "density: ~1.8",
            "radioactivity: Non-radioactive",
            "pHValue: 7"
        ]
    },
    {
        "input": "Silicon Dioxide (Silica)",
        "output": [
            "name: Silicon Dioxide (Silica)",
            "molecularFormula: SiO₂",
            "molarMass: 60.08",
            "Boiling Point: 2,950",
            "meltingPoint: 1,713",
            "waterSolubility: Insoluble",
            "biodegradability: Non-biodegradable",
            "flammability: Non-flammable",
            "corrosivity: Non-corrosive",
            "density: 2.65",
            "radioactivity: Non-radioactive",
            "pHValue: ~7"
        ]
    },
    {
        "input": "Sodium Bicarbonate",
        "output": [
            "name: Sodium Bicarbonate",
            "molecularFormula: NaHCO₃",
            "molarMass: 84.01",
            "Boiling Point: Decomposes before boiling",
            "meltingPoint: 50",
            "waterSolubility: 9",
            "biodegradability: Readily biodegradable",
            "flammability: Non-flammable",
            "corrosivity: Non-corrosive",
            "density: 2.2",
            "radioactivity: Non-radioactive",
            "pHValue: ~8.3"
        ]
    },
    {
        "input": "Sodium Carbonate",
        "output": [
            "name: Sodium Carbonate",
            "molecularFormula: Na₂CO₃",
            "molarMass: 105.99",
            "Boiling Point: Decomposes before boiling",
            "meltingPoint: 851",
            "waterSolubility: 22",
            "biodegradability: Readily biodegradable",
            "flammability: Non-flammable",
            "corrosivity: Non-corrosive",
            "density: 2.54",
            "radioactivity: Non-radioactive",
            "pHValue: ~11.6"
        ]
    },
    {
        "input": "Sodium Chloride",
        "output": [
            "name: Sodium Chloride",
            "molecularFormula: NaCl",
            "molarMass: 58.44",
            "Boiling Point: 1,413",
            "meltingPoint: 801",
            "waterSolubility: 360",
            "biodegradability:(inorganic salt)",
            "flammability: Non-flammable",
            "corrosivity: Non-corrosive",
            "density: 2.165",
            "radioactivity: Non-radioactive",
            "pHValue: 7"
        ]
    },
    {
        "input": "Sodium Hydroxide",
        "output": [
            "name: Sodium Hydroxide",
            "molecularFormula: NaOH",
            "molarMass: 40.0",
            "Boiling Point: 1,388",
            "meltingPoint: 318",
            "waterSolubility: Miscible",
            "biodegradability:  (dissociates in water)",
            "flammability: Non-flammable",
            "corrosivity: Highly corrosive",
            "density: 2.13",
            "radioactivity: Non-radioactive",
            "pHValue: 14"
        ]
    },
    {
        "input": "Sodium Hypochlorite",
        "output": [
            "name: Sodium Hypochlorite",
            "molecularFormula: NaClO",
            "molarMass: 74.44",
            "Boiling Point: Decomposes before boiling",
            "meltingPoint: -18",
            "waterSolubility: Miscible",
            "biodegradability: Readily biodegradable",
            "flammability: Non-flammable",
            "corrosivity: Corrosive",
            "density: 1.11",
            "radioactivity: Non-radioactive",
            "pHValue: 11-13"
        ]
    },
    {
        "input": "Strychnine",
        "output": [
            "name: Strychnine",
            "molecularFormula: C₂₁H₂₂N₂O₂",
            "molarMass: 334.42",
            "Boiling Point: Decomposes before boiling",
            "meltingPoint: 274",
            "waterSolubility: Slightly soluble",
            "biodegradability: Not readily biodegradable",
            "flammability: Non-flammable",
            "corrosivity: Not corrosive",
            "density: 1.3",
            "radioactivity: Non-radioactive",
            "pHValue: 7"
        ]
    },
    {
        "input": "Styrene",
        "output": [
            "name: Styrene",
            "molecularFormula: C₈H₈",
            "molarMass: 104.15",
            "Boiling Point: 145",
            "meltingPoint: -30",
            "waterSolubility: 0.03",
            "biodegradability: Readily biodegradable",
            "flammability: Flammable",
            "corrosivity: Non-corrosive",
            "density: 0.909",
            "radioactivity: Non-radioactive",
            "pHValue: 7"
        ]
    },
    {
        "input": "Sucrose",
        "output": [
            "name: Sucrose",
            "molecularFormula: C₁₂H₂₂O₁₁",
            "molarMass: 342.3",
            "Boiling Point: Decomposes before boiling",
            "meltingPoint: 186",
            "waterSolubility: 2000",
            "biodegradability: Readily biodegradable",
            "flammability: Non-flammable",
            "corrosivity: Non-corrosive",
            "density: 1.587",
            "radioactivity: Non-radioactive",
            "pHValue: 7"
        ]
    },
    {
        "input": "Sulfuric Acid",
        "output": [
            "name: Sulfuric Acid",
            "molecularFormula: H₂SO₄",
            "molarMass: 98.08",
            "Boiling Point: 337",
            "meltingPoint: 10",
            "waterSolubility: Miscible",
            "biodegradability: (dissociates in water)",
            "flammability: Non-flammable",
            "corrosivity: Highly corrosive",
            "density: 1.84",
            "radioactivity: Non-radioactive",
            "pHValue: <1"
        ]
    },
    {
        "input": "Tetrafluoroethylene",
        "output": [
            "name: Tetrafluoroethylene",
            "molecularFormula: C₂F₄",
            "molarMass: 100.02",
            "Boiling Point: -76.3",
            "meltingPoint: -142",
            "waterSolubility: Insoluble",
            "biodegradability: Not readily biodegradable",
            "flammability: Non-flammable",
            "corrosivity: Non-corrosive",
            "density: 1.447",
            "radioactivity: Non-radioactive",
            "pHValue: Neutral (gas)"
        ]
    },
    {
        "input": "Tetrahydrocannabinol (THC)",
        "output": [
            "name: Tetrahydrocannabinol (THC)",
            "molecularFormula: C₂₁H₃₀O₂",
            "molarMass: 314.46",
            "Boiling Point: Decomposes before boiling",
            "meltingPoint: 157",
            "waterSolubility: Insoluble",
            "biodegradability: Not readily biodegradable",
            "flammability: Non-flammable",
            "corrosivity: Non-corrosive",
            "density: ~1.0",
            "radioactivity: Non-radioactive",
            "pHValue: 7"
        ]
    },
    {
        "input": "Thymine",
        "output": [
            "name: Thymine",
            "molecularFormula: C₅H₆N₂O₂",
            "molarMass: 126.11",
            "Boiling Point: Decomposes before boiling",
            "meltingPoint: 316-317",
            "waterSolubility: Slightly soluble",
            "biodegradability: Readily biodegradable",
            "flammability: Non-flammable",
            "corrosivity: Non-corrosive",
            "density: ~1.5",
            "radioactivity: Non-radioactive",
            "pHValue: 7"
        ]
    },
    {
        "input": "Trinitrotoluene (TNT)",
        "output": [
            "name: Trinitrotoluene (TNT)",
            "molecularFormula: C₇H₅N₃O₆",
            "molarMass: 227.13",
            "Boiling Point: Decomposes before boiling",
            "meltingPoint: 81",
            "waterSolubility: Insoluble",
            "biodegradability: Not readily biodegradable",
            "flammability: Explosive",
            "corrosivity: Non-corrosive",
            "density: 1.654",
            "radioactivity: Non-radioactive",
            "pHValue: 7"
        ]
    },
    {
        "input": "Toluene",
        "output": [
            "name: Toluene",
            "molecularFormula: C₇H₈",
            "molarMass: 92.14",
            "Boiling Point: 110.6",
            "meltingPoint: -93",
            "waterSolubility: 0.52",
            "biodegradability: Readily biodegradable",
            "flammability: Flammable",
            "corrosivity: Non-corrosive",
            "density: 0.866",
            "radioactivity: Non-radioactive",
            "pHValue: 7"
        ]
    },
    {
        "input": "Triuranium Octaoxide",
        "output": [
            "name: Triuranium Octaoxide",
            "molecularFormula: U₃O₈",
            "molarMass: 842.02",
            "Boiling Point:  (decomposes)",
            "meltingPoint: 2075",
            "waterSolubility: Insoluble",
            "biodegradability: Not biodegradable",
            "flammability: Non-flammable",
            "corrosivity: Corrosive to some metals",
            "density: 8.32",
            "radioactivity: Naturally radioactive",
            "pHValue:  (solid)"
        ]
    },
    {
        "input": "Uracil",
        "output": [
            "name: Uracil",
            "molecularFormula: C₄H₄N₂O₂",
            "molarMass: 112.09",
            "Boiling Point: Decomposes before boiling",
            "meltingPoint: 335-338",
            "waterSolubility: Slightly soluble",
            "biodegradability: Readily biodegradable",
            "flammability: Non-flammable",
            "corrosivity: Non-corrosive",
            "density: ~1.5",
            "radioactivity: Non-radioactive",
            "pHValue: 7"
        ]
    },
    {
        "input": "Urea",
        "output": [
            "name: Urea",
            "molecularFormula: CH₄N₂O",
            "molarMass: 60.06",
            "Boiling Point: Decomposes before boiling",
            "meltingPoint: 133-135",
            "waterSolubility: Soluble",
            "biodegradability: Readily biodegradable",
            "flammability: Non-flammable",
            "corrosivity: Non-corrosive",
            "density: 1.32",
            "radioactivity: Non-radioactive",
            "pHValue: 7"
        ]
    },
    {
        "input": "Vanillin",
        "output": [
            "name: Vanillin",
            "molecularFormula: C₈H₈O₃",
            "molarMass: 152.15",
            "Boiling Point: 285",
            "meltingPoint: 81-83",
            "waterSolubility: ~2 g/100 mL",
            "biodegradability: Readily biodegradable",
            "flammability: Non-flammable",
            "corrosivity: Non-corrosive",
            "density: 1.06",
            "radioactivity: Non-radioactive",
            "pHValue: 7"
        ]
    },
    {
        "input": "Vinyl Chloride",
        "output": [
            "name: Vinyl Chloride",
            "molecularFormula: C₂H₃Cl",
            "molarMass: 62.5",
            "Boiling Point: -13.4",
            "meltingPoint: -153.7",
            "waterSolubility: 0.25",
            "biodegradability: Readily biodegradable",
            "flammability: Flammable",
            "corrosivity: Non-corrosive",
            "density: 0.911",
            "radioactivity: Non-radioactive",
            "pHValue: 7"
        ]
    },
    {
        "input": "Water",
        "output": [
            "name: Water",
            "molecularFormula: H₂O",
            "molarMass: 18.02",
            "Boiling Point: 100",
            "meltingPoint: 0",
            "waterSolubility: Soluble",
            "biodegradability: (does not biodegrade)",
            "flammability: Non-flammable",
            "corrosivity: Non-corrosive",
            "density: 1",
            "radioactivity: Non-radioactive",
            "pHValue: 7"
        ]
    },
    {
        "input": "Xylene",
        "output": [
            "name: Xylene",
            "molecularFormula: C₈H₁₀",
            "molarMass: 106.16",
            "Boiling Point: 138-144",
            "meltingPoint: -47.87",
            "waterSolubility: Insoluble",
            "biodegradability: Readily biodegradable",
            "flammability: Flammable",
            "corrosivity: Non-corrosive",
            "density: 0.86",
            "radioactivity: Non-radioactive",
            "pHValue: 7"
        ]
    }

  ];
  
  export const getChemicalDetails = (name) => {
    return chemicalData.find((element) => element.input.toLowerCase() === name.toLowerCase());
  };
  
