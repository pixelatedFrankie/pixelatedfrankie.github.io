const Breadcrumb = ({ items }) => (
  <nav className="flex" aria-label="Breadcrumb">
    {items.map((item, index) => (
      <a key={index} href={item.href} className="text-gray-500 hover:text-gray-700">
        {item.text}
      </a>
    ))}
  </nav>
);