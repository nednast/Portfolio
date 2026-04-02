import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const MarqueeRow = ({ items, direction = "right", speed = 50, activeType }) => {
  const rowRef = useRef(null);
  const contentRef = useRef(null);
  const timeline = useRef(null);

  useEffect(() => {
    const row = rowRef.current;
    const content = contentRef.current;
    const contentWidth = content.offsetWidth;
    const directionFactor = direction === "left" ? -1 : 1;

    if (timeline.current) timeline.current.kill();

    timeline.current = gsap.to(row, {
      x: `-=${contentWidth * directionFactor}`,
      ease: "none",
      duration: contentWidth / speed,
      repeat: -1,
      modifiers: {
        x: (x) => {
          const s = parseFloat(x);
          return `${gsap.utils.wrap(-contentWidth, 0, s)}px`;
        },
      },
    });

    return () => {
      if (timeline.current) timeline.current.kill();
    };
  }, [items, direction, speed, activeType]);

  // Упрощенная функция: теперь она всегда одинаково мешает стили
  const getSkillStyle = (index) => {
    const styles = ["primary", "secondary", "accent", "outline"];
    const fonts = ["bold", "italic", "regular"];

    // Используем только индекс, чтобы распределение было равномерным
    const styleClass = styles[index % styles.length];
    const fontClass = fonts[index % fonts.length];

    return `marquee_item ${styleClass} ${fontClass}`;
  };

  return (
    <div className="marquee_row" ref={rowRef}>
      <div className="marquee_content" ref={contentRef}>
        {items.map((item, index) => (
          /* Добавляем item в key, чтобы React точно перерисовал слово при смене контента */
          <span
            key={`${activeType}-${item}-${index}`}
            className={getSkillStyle(index)}
          >
            {item}
          </span>
        ))}
      </div>
      <div className="marquee_content">
        {items.map((item, index) => (
          <span
            key={`clone-${activeType}-${item}-${index}`}
            className={getSkillStyle(index)}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeRow;
