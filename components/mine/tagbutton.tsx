import * as React from "react";
import { Button } from "~/components/ui/button";

interface TagButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	label: string;
}

const TagButton = React.forwardRef<HTMLButtonElement, TagButtonProps>(({ label, className, ...props }, ref) => (
	<Button
		ref={ref}
		className={`rounded-md ${className}`}
		variant="secondary"
		size="sm"
		{...props}>
		{label}
	</Button>
));

TagButton.displayName = "TagButton";

export { TagButton };