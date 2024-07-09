function Row({ children }) {
  return (
    <div className="flex flex-col justify-between gap-[10px] sm:flex-row sm:items-center">
      {children}
    </div>
  );
}

export default Row;
