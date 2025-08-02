"use client";

import { useEffect, useRef, useState } from "react";
import Sortable from "sortablejs";

export default function AboutMe() {
  const [items, setItems] = useState([
    {
      id: 1,
      title: "Order",
      subtitle: "7,500 of 10,000 orders",
      progress: 75,
      progressClass: "progress-success",
      icon: "tabler--package",
      bgClass: "bg-success/20 text-success",
    },
    {
      id: 2,
      title: "Revenue",
      subtitle: "$45,000 of $100,000",
      progress: 45,
      progressClass: "progress-warning",
      icon: "tabler--cash",
      bgClass: "bg-warning/20 text-warning",
    },
    {
      id: 3,
      title: "Invoice",
      subtitle: "$18,200 of $25,000",
      progress: 73,
      progressClass: "progress-error",
      icon: "tabler--credit-card",
      bgClass: "bg-error/20 text-error",
    },
    {
      id: 4,
      title: "Shipments",
      subtitle: "10,450 of 12,000 shipments",
      progress: 87,
      progressClass: "progress-info",
      icon: "tabler--truck",
      bgClass: "bg-info/20 text-info",
    },
  ]);

  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const sortable = Sortable.create(containerRef.current, {
      animation: 150,
      ghostClass: "opacity-50",
      handle: ".stat", // or ".cursor-move" as per FlyonUI example
      onEnd: (evt) => {
        const newItems = [...items];
        const [moved] = newItems.splice(evt.oldIndex, 1);
        newItems.splice(evt.newIndex, 0, moved);
        setItems(newItems);
      },
    });

    return () => {
      sortable.destroy();
    };
  }, [items]);

  return (
    <div
      id="aboutme"
      className="w-full bg-gray-200 flex flex-col md:flex-row items-center justify-center p-10"
    >
      <div className="h-[80vh] w-full flex gap-6">
        {/* Left side: stats cards (2/3 width) */}
        <div
          ref={containerRef}
          className="grid md:grid-cols-2 gap-6 w-2/3 *:cursor-move"
        >
          {items.map(
            ({
              id,
              title,
              subtitle,
              progress,
              progressClass,
              icon,
              bgClass,
            }) => (
              <div
                key={id}
                className="stats max-sm:w-full stat bg-white shadow rounded-lg p-6"
              >
                <div className="stat">
                  <div className="avatar avatar-placeholder">
                    <div
                      className={`${bgClass} size-10 rounded-full flex items-center justify-center`}
                    >
                      <span className={`icon-[${icon}] size-6`}></span>
                    </div>
                  </div>
                  <div className="stat-value mb-1">{title}</div>
                  <div className="stat-title">{subtitle}</div>
                  <div
                    className={`progress bg-opacity-10 h-2 mt-2 ${progressClass.replace(
                      "progress-",
                      "bg-"
                    )}`}
                    role="progressbar"
                    aria-label={`${title} Progressbar`}
                    aria-valuenow={progress}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div
                      className={`progress-bar ${progressClass}`}
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        {/* Right side: mockup */}
        <div className="hidden md:flex w-1/3 items-center justify-center">
          <div className="mockup-phone border-primary">
            <div className="camera"></div>
            <div className="display">
              <div className="artboard artboard-demo phone-1 flex flex-col items-center justify-center p-4">
                {/* Avatar */}
                <div className="avatar mb-4">
                  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="https://i.pravatar.cc/150?img=3" alt="Avatar" />
                  </div>
                </div>
                {/* Texto */}
                <h3 className="text-xl font-semibold mb-2">Hola, soy Juan</h3>
                <p className="text-gray-500 text-center">
                  Desarrollador web con pasión por crear experiencias únicas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
