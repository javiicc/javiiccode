type PostMeta = {
  title: string;
  subtitle: string;
  description: string;
  author: string;
  date: string;
  read_time: string;
  last_update: string;
  thumbnail: string;
  tags: Array<string>;
  permalink?: string;
};
// function instanceOfPostMeta(object: any): object is PostMeta {
//   return "member" in object;
// }
type PostsMeta = Array<PostMeta>;
function instanceOfPostsMeta(object: any): object is PostsMeta {
  return "member" in object;
}
export const getAllTags = (metadata: PostsMeta) => {
  let tags = new Set<string>();
  for (const meta of metadata) {
    meta.tags.forEach((tag) => tags.add(tag));
  }

  return Array.from(tags);
};

// const colors = {
//   AI: "text-[#ef4444]",
//   NLP: "text-[#1313d6]",
//   embeddings: "text-[#37eb34]",
//   cosineSimilarity: "text-[#32a852]",
//   // python: "text-[#c2b60c]",
//   python: "python",
//   // ruby: "text-[#32a852]",
//   // elixir: "text-[#d120d4]",
//   // go: "text-[#37eb34]",
//   // desigPaterns: "text-[#32a852]",
//   // MVC: "text-[#ef4444]",
// };
// export const tagColor = (key: keyof typeof colors): Object => {
//   console.log(`key :: ${key}`);
//   console.log(`colors[key] :: ${colors[key]}`);
//   return colors[key];
// };
// export const getTagColor = (tag: any) => {
//   console.log(`colors.hasOwnProperty(tag) :: ${colors.hasOwnProperty(tag)}`);
//   colors.hasOwnProperty(tag) ? tagColor(tag) : "text-[#38bdf8]";
// };

// // export const getTagColor = (tag: string) => {
// //   if (hasKey(colors, tag)) {
// //     return colors[tag]; // works fine!
// //   } else {
// //     return "#38bdf8";
// //   }
// // };
