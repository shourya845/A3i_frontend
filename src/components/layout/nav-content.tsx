import Image from "next/image";
import {
  company,
  industries,
  products,
  type NavigationGroup,
} from "@/content/navigation";

export type MenuName = "Products" | "Industry" | "Company";
export function Icon({ name }: { name: string }) {
  const paths: Record<string, string> = {
    bank: "M3 10h18L12 3 3 10Zm2 3v6m5-6v6m4-6v6m5-6v6M3 21h18",
    bolt: "m13 2-9 12h7l-1 8 10-13h-8l1-7Z",
    store: "M3 10h18l-2-6H5l-2 6Zm1 0v11h16V10M9 21v-7h6v7",
    building: "M5 21V3h14v18M9 7h1m4 0h1m-6 4h1m4 0h1m-6 4h1m4 0h1m-4 6v-3",
    briefcase: "M3 7h18v14H3V7Zm5 0V3h8v4M3 12h18m-11 0v3h4v-3",
    scales: "M12 3v18M7 21h10M4 7h16M6 7l-4 8h8L6 7Zm12 0-4 8h8l-4-8Z",
  };
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={paths[name] || paths.building} />
    </svg>
  );
}
function Groups({
  groups,
  select,
}: {
  groups: NavigationGroup[];
  select: (label: string) => void;
}) {
  return (
    <div className="menu-columns">
      {groups.map((group) => (
        <section className="menu-group" key={group.title}>
          <h2>
            <Icon name={group.icon} />
            {group.title}
          </h2>
          {group.items.map((item) => (
            <button
              className="menu-item"
              key={item.key}
              onClick={() => select(item.label)}
            >
              <span>{item.label}</span>
              <small>{item.description}</small>
            </button>
          ))}
        </section>
      ))}
    </div>
  );
}
export function NavContent({
  menu,
  select,
}: {
  menu: MenuName;
  select: (label: string) => void;
}) {
  if (menu === "Products")
    return (
      <div className="product-menu">
        {products.map((product) => (
          <button
            className="product-tile"
            key={product.name}
            onClick={() => select(product.name)}
          >
            <Image
              src={`/images/products/${product.image}`}
              alt=""
              fill
              sizes="(max-width: 600px) 45vw, 220px"
            />
            <span className="product-shade" />
            <span className="product-status" data-status={product.status}>
              {product.status}
            </span>
            <span className="product-name">{product.name}</span>
          </button>
        ))}
      </div>
    );
  return (
    <>
      <Groups
        groups={menu === "Industry" ? industries : company}
        select={select}
      />
      <div className="menu-footer">
        <p>
          {menu === "Industry"
            ? "Not sure where you fit? We'll map the highest-ROI use cases for your business."
            : "Questions, partnerships or a role you'd be great in — we'd love to hear from you."}
        </p>
        <button onClick={() => select("Contact")}>
          {menu === "Industry" ? "Talk to us" : "Get in touch"}{" "}
          <span aria-hidden="true">↗</span>
        </button>
      </div>
    </>
  );
}
