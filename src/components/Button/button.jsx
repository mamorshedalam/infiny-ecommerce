export default function Button({ children, variant = "black", type, classes, operation, ...rest }) {
     return (
          <button {...rest} onClick={operation} type={type} className={`${classes} ${variant === "black" ? "bg-neutral-900 text-white" : "border-2 border-neutral-900"} min-w-[15rem] text-center uppercase font-bold tracking-widest px-4 py-4`}>{children}</button>
     )
}