type ProgressDotsProps = {
  total: number;
  current: number;
};

export function ProgressDots({ total, current }: ProgressDotsProps) {
  return (
    <div className="flex items-center justify-center gap-2" aria-hidden>
      {Array.from({ length: total }).map((_, index) => {
        const active = index === current;
        return (
          <span
            key={index}
            className={`h-2 rounded-full transition-all duration-300 ${
              active ? "w-7 bg-[#F26522]" : "w-2 bg-white/35"
            }`}
          />
        );
      })}
    </div>
  );
}
