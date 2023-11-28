const SocialMediaIcons = ({ icons }) => (
  <div className="flex space-x-4">
    {icons.map((icon, index) => (
      <a key={index} href={icon.href} className="text-gray-500 hover:text-gray-700">
        {icon.svg}
      </a>
    ))}
  </div>
);