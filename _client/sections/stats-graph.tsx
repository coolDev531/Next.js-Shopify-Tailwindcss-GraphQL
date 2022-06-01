import Image from "next/image";
import { StatsGraphSection } from "types/sections/stats-graph";

export function StatsGraph({ id, settings, blocks, type }: StatsGraphSection) {
  return (
    <section className="stats-graph">
      <div className="mx-auto flex max-w-7xl gap-4 px-8 py-16">
        {blocks.map((block) => {
          switch (block.type) {
            case "stat":
              return (
                <section key={block.id} className="stats-graph__stat">
                  <header>
                    <h3>{block.settings.stat}</h3>
                    <h2>{block.settings.descriptions}</h2>
                  </header>
                </section>
              );
          }
        })}
      </div>
    </section>
  );
}
