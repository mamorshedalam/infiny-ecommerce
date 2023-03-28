export default function ButtonBlack({ children, type, classes, operation }) {
     return (
          <button onClick={operation} type={type} className={`${classes} min-w-[15rem] bg-neutral-900 text-white text-center uppercase font-bold tracking-widest px-4 py-4`}>{children}</button>
     )
}