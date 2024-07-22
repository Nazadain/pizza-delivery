const Title = ({ className, variant = "h1", children, ...props }) => {
  const Tag = `${variant}`;

  return (
    <Tag className={className} {...props}>
      {children}
    </Tag>
  );
};

export default Title;
