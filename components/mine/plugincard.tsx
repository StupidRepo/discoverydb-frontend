import * as React from "react";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "~/components/ui/card";
import {Label} from "~/components/ui/label";
import {Button} from "~/components/ui/button";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface PluginCardProps extends React.HTMLAttributes<HTMLDivElement> {
	name: string | undefined;
	description: string | undefined;

	iconUrl: string | undefined;

	sourceUrl: string | undefined;
	instructionsUrl: string | undefined;

	isVerified: boolean;
}

const PluginCard = React.forwardRef<HTMLDivElement, PluginCardProps>(({ className, ...props }, ref) => (
	<Card ref={ref} className={`flex flex-col p-4 ${className}`}>
		<div className="flex items-start">
			<img
				src={props.iconUrl ?? "https://autumn.revolt.chat/icons/8IKHH2wGygc_emWU_qu3__GuK0u3OQ2MZF8ImHMFhz?width=128"}
				alt="Server Icon"
				className="h-12 w-12 bg-cyan-950 rounded-full p-0.5 mr-4"
			/>
			<div>
				<CardTitle className="text-left">
					<div className="inline-flex items-center gap-2">
						{props.isVerified && (
							<img
								src="https://rvlt.gg/badges/revolt_r.svg"
								alt="Badge"
								className="h-4 w-4"
							/>
						)}
						<Label className="text-lg font-semibold truncate">
							{props.name ?? "[unnamed plugin]"}
						</Label>
					</div>
				</CardTitle>
				<CardDescription className="text-left mt-1">
					{props.description ?? "No description provided."}
				</CardDescription>
			</div>
		</div>
		<div className="mt-4 flex justify-start gap-2">
			<Button
				variant="outline"
				disabled={props.sourceUrl === undefined}
				onClick={() => {
					props.sourceUrl && (window.location.href = props.sourceUrl);
				}}>
				<FontAwesomeIcon icon={faGithub} /> Source
			</Button>
			<Button
				variant="outline"
				disabled={props.instructionsUrl === undefined}
				onClick={() => {
					props.instructionsUrl && (window.location.href = props.instructionsUrl);
				}}>
				Installation Instructions
			</Button>
		</div>
	</Card>
));
PluginCard.displayName = "PluginCard";

export { PluginCard }