import classNames from "classnames";

export function Container({ className, ...props }) {
  return (
    <div
      className={classNames(
        "mx-auto max-w-[1328px] px-4 sm:px-4 lg:px-8 py-5 lg:py-7",
        className
      )}
      {...props}
    />
  );
}
