// const tagList = [
//   ["python", "text-yellow-400"],
//   ["ruby", "text-yellow-400"],
//   ["elixir", "text-lime-400"],
//   ["go", "text-yellow-400"],
//   ["desigPaterns", "text-yellow-400"],
//   ["MVC", "text-yellow-400"],
//   ["python", "text-yellow-400"],
//   ["python", "text-yellow-400"],
// ];

// const tagObject = {
//   python: "text-yellow-400",
//   ruby: "text-yellow-400",
//   elixir: "text-lime-400",
//   go: "text-yellow-400",
//   desigPaterns: "text-yellow-400",
//   MVC: "text-yellow-400",
//   python: "text-yellow-400",
//   python: "text-yellow-400",
// };
// export const tagsAndColors = {
//   python: "text-yellow-400",
//   ruby: "text-cyan-500",
//   elixir: "text-lime-400",
//   go: "text-rose-300",
//   desigPaterns: "text-green-400",
//   MVC: "text-amber-300",
// };
// export const tagsAndColors = {
//   python: "yellow-400",
//   ruby: "sky-500/50",
//   elixir: "lime-400",
//   go: "rose-300",
//   desigPaterns: "green-400",
//   MVC: "amber-300",
// };

// export const tagsAndColors = {
//   python: "text-[#1313d6]",
//   ruby: "text-[#32a852]",
//   elixir: "text-[#d120d4]",
//   go: "text-[#37eb34]",
//   desigPaterns: "text-[#32a852]",
//   MVC: "text-[#ef4444]",
// };

export const tagsAndColors = {
  AI: "text-[#ef4444]",
  NLP: "text-[#1313d6]",
  embeddings: "text-[#37eb34]",
  cosineSimilarity: "text-[#32a852]",
  python: "text-[#c2b60c]",
  // ruby: "text-[#32a852]",
  // elixir: "text-[#d120d4]",
  // go: "text-[#37eb34]",
  // desigPaterns: "text-[#32a852]",
  // MVC: "text-[#ef4444]",
};

export const getTagList = () => {
  const tags = [];
  for (const key in tagsAndColors) {
    // console.log(`${key} :: ${tagsAndColors[key]}`);
    // console.log(key);
    // if (tagsAndColors.hasOwnProperty(key)) {
    //   // console.log(`${key}: ${tagsAndColors[key]}`);
    // }
    tags.push([key, tagsAndColors[key]]);
  }
  return tags;
};

// export const getTagColor = (tag) => {
//   return tagsAndColors[tag];
// };
