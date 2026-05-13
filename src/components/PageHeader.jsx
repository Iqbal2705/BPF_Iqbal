export default function PageHeader({
  title = "Dashboard",
  breadcrumb = "Dashboard",
  children,
}) {
  return (
    <div
      id="pageheader-container"
      className="flex items-center justify-between p-4"
    >
      <div id="pageheader-left" className="flex flex-col">
        <span id="page-title" className="text-3xl font-semibold">
          {title}
        </span>
        <div
          id="breadcrumb-links"
          className="flex items-center font-medium space-x-2 mt-2"
        >
          {Array.isArray(breadcrumb) ? (
            breadcrumb.map((crumb, index) => (
              <span key={index} className="flex items-center space-x-2">
                {index > 0 && <span className="text-gray-500 mx-1">/</span>}
                <span className="text-gray-500">{crumb}</span>
              </span>
            ))
          ) : (
            <>
              <span className="text-gray-500">Dashboard</span>
              <span className="text-gray-500">/</span>
              <span className="text-gray-500">{breadcrumb}</span>
            </>
          )}
        </div>
      </div>
      <div id="action-button">{children}</div>
    </div>
  );
}
