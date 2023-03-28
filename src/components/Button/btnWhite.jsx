export default function ButtonWhite({ children, type, classes, operation }) {
     return (
          <button onClick={operation} type={type} className={`${classes} min-w-[15rem] text-center uppercase font-bold tracking-widest border-2 border-neutral-900 px-4 py-4`}>{children}</button>
     )
}