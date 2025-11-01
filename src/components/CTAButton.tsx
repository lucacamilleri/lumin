const CTAButton = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <button className="cta-button" onClick={onClick}>
      {children}
    </button>
  );
};

export default CTAButton;
