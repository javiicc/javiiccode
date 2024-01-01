import { promises, createReadStream, readLines, open } from "fs";
import { parse } from "csv-parse";
import { type } from "os";
import path from "path";
// import { fs } from "fs";
// import readFile from "fs";
// import readline from "readline";
export async function getWildfireData() {
  const fullPath = path.join(
    process.cwd(),
    "./components/home/globe",
    "MODIS_C6_1_Global_24h.csv"
  );
  // const wildfires = await promises.readFile(fullPath, "utf8");
  // console.log(typeof wildfires);
  // const wildfires = [];
  const raw = await promises.readFile(fullPath, "utf8");
  const wildfires = raw.split("\n").map((row) => {
    const spltrow = row.split(",");
    return {
      lat: parseFloat(spltrow[0]),
      lng: parseFloat(spltrow[1]),
      name: "holu",
      size: 0.1,
      color: ["red", "orange", "red", "orange"][Math.round(Math.random() * 3)],
    };
  });

  console.log(wildfires.length);

  return wildfires;
}
// export aync function getWildfireData() {
//   const fullPath = path.join(
//     process.cwd(),
//     "./components/home/globe",
//     "MODIS_C6_1_Global_24h.csv"
//   );
//   // const wildfires = await promises.readFile(fullPath, "utf8");
//   // console.log(typeof wildfires);
//   const data = [];
//   const stream = createReadStream(fullPath)
//     .pipe(parse({ delimiter: ",", columns: true, ltrim: true }))
//     .on("data", function (row) {
//       // (row.lat = row.latitude),
//       //   (row.lng = row.longitude),
//       (row.size = 0.2),
//         (row.color = ["red", "green"][Math.round(Math.random() * 3)]);
//       // (row.color = ["red", "white", "blue", "green"][
//       //   Math.round(Math.random() * 3)
//       // ]);
//       data.push(row);
//       // CHANGE latitude and longitude
//     })
//     .on("error", function (error) {
//       console.log(error.message);
//     })
//     .on("end", function () {
//       console.log("finished");
//       // console.log(data);
//       // return data;
//     });

//   return data;
// }

// preprocessWildfireData();
// Define recursive function to print nested values

// function iterateObject(obj) {
//   let pointsData = {};

//   // let features = obj.features
//   // console.log(features)
//   for (let prop in obj.features.properties) {
//     if (typeof obj[prop] == "object") {
//       iterateObject(obj[prop]);
//     } else {
//       if (prop == "properties") {
//         console.log(obj[prop]);
//       }
//     }
//   }
// }

function iterateObject(obj) {
  let pointsData = {};

  // let features = obj.features
  // console.log(features)
  for (let prop in obj.features.properties) {
    if (typeof obj[prop] == "object") {
      iterateObject(obj[prop]);
    } else {
      if (prop == "properties") {
        // console.log(obj[prop]);
      }
    }
  }
}

function printValues(obj) {
  for (var k in obj) {
    if (obj[k] instanceof Object) {
      printValues(obj[k]);
    } else {
      // document.write(obj[k] + "<br>");
      // console.log(obj[k]);
    }
  }
}

// Printing all the values from the resulting object
// printValues(obj);

export async function getLocalData() {
  // Get the path of the json file
  const fullPath = path.join(
    process.cwd(),
    "./json/ne_110m_populated_places_simple.geojson"
  );
  console.log(fullPath);
  // Read the json file
  const jsonData = await promises.readFile(fullPath, "utf8");
  // const jsonData = fs.readFile("./customer.json", "utf8");
  // console.log(jsonData);
  // Parse data as json
  const objectData = JSON.parse(jsonData);
  // iterateObject(objectData);

  // console.log(objectData.properties);
  // const objectPropertiesData = JSON.parse(objectData.properties);

  // console.log(objectPropertiesData);

  return objectData;
}

// const t = getLocalData();

// https://medium.com/@osiolabs/read-write-json-files-with-node-js-92d03cc82824#:~:text=Reading%20a%20JSON%20file&text=Passing%20require()%20with%20the,data%20into%20a%20JavaScript%20object.&text=But%20reading%20JSON%20files%20with,first%20time%20require%20was%20run.

// function jsonReader(filePath, cb) {
//   fs.readFile(filePath, (err, fileData) => {
//       if (err) {
//           return cb && cb(err)
//       }
//       try {
//           const object = JSON.parse(fileData)
//           return cb && cb(null, object)
//       } catch(err) {
//           return cb && cb(err)
//       }
//   })
// }
