// import s from "./heading.module.css";
// import cn from "classnames";

// const copyToClipboard = ({ id, title, ...rest }) => {
//   return (
//     // eslint-disable-next-line jsx-a11y/anchor-has-content
//     <a
//       className="transition-all duration-300 opacity-0 hover:opacity-100"
//       style={{ textDecoration: "none", color: "#f59e0b" }}
//       href={`#${id}`}
//       rel="canonical"
//       title={`Copy ${title} to clipboard`}
//       tabIndex={-1}
//       aria-hidden
//       {...rest}
//     >
//       {" "}
//       #
//     </a>
//   );
// };

// export const H1 = ({ id, children, ...rest }) => {
//   console.log(`CHILDREN H1 ${children}`);
//   console.log(`CHILDREN H1 props ${children.props}`);
//   let title;
//   if (typeof children === "object") {
//     title = children.props?.title;
//   } else {
//     title = children;
//   }

//   return (
//     <>
//       <h1 title={title} aria-label={title} {...rest} className="flex text-2xl">
//         {children}

//         {id && copyToClipboard({ id, title: children })}
//       </h1>
//     </>
//   );
// };

// export const H2 = ({ id, children, ...rest }) => (
//   <>
//     <h2
//       // style={{ color: "#FFF676", fontSize: "2.5rem", lineHeight: "2rem" }}
//       title={children}
//       aria-label={children}
//       // className={s.customH2} //"custom-h2"
//       // class="customH2"
//       {...rest}
//     >
//       {children}

//       {/* {id && copyToClipboard({ id, title: children })} */}
//     </h2>
//   </>
// );

// export const H3 = ({ id, children, ...rest }) => (
//   <>
//     <h3 title={children} aria-label={children} {...rest}>
//       {children}

//       {id && copyToClipboard({ id, title: children })}
//     </h3>
//   </>
// );

// export const H4 = ({ children, ...rest }) => (
//   <>
//     <h4 title={children} aria-label={children} {...rest}>
//       {children}
//     </h4>
//   </>
// );

// export const H5 = ({ children, ...rest }) => (
//   <>
//     <h5 title={children} aria-label={children} {...rest}>
//       {children}
//     </h5>
//   </>
// );
