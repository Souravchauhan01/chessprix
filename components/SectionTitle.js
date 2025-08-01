export default function SectionTitle({ children }) {
  return (
    <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 mb-12 drop-shadow-[0_3px_2px_rgba(0,0,0,0.4)]">
      {children}
    </h2>
  );
}