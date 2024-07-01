function Row({ children }) {
  return (
    <div className="flex items-center justify-between gap-[10px]">
      {children}
    </div>
  );
}

export default Row;
