import type { MetaFunction } from "@remix-run/node";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "components/ui/tabs";
import { ServerPage } from "components/pages/serverpage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faMessage,
	faRobot,
	faBolt, faPuzzlePiece, faGlobe, faGlobeEurope,
} from "@fortawesome/free-solid-svg-icons";
import {BotPage} from "~/components/pages/botpage";
import {PluginsPage} from "~/components/pages/pluginspage";
import {useState} from "react";
import {Button} from "~/components/ui/button";

export const meta: MetaFunction = () => {
	return [
		{ title: "DiscoveryDB" },
		{
			property: "og:title",
			content: "DiscoveryDB",
		},
		{
			name: "description",
			content: "DiscoveryDB is an open-source Revolt discovery platform.",
		},
	];
};

export default function Index() {
	const [isInSupportedClient, setIsInSupportedClient] = useState(false);

	const [sent, setSent] = useState(false);
	const [received, setReceived] = useState(false);

	// const Server_URL = "https://discoverydb.doyouliveinthe.uk";
	const Server_URL = "http://localhost:5173";

	window.addEventListener('message', (event) => {
		if (event.data.type === 'GOODBYE' && !received) {
			setReceived(true);

			console.log('Received GOODBYE message, we support plugins!');
			setIsInSupportedClient(true);
		}
	});

	if(!isInSupportedClient && !sent) {
		setSent(true);

		console.log("Sending HELLO...");
		window.parent.postMessage({ type: 'HELLO' }, '*');
	}

	return (
		<Tabs defaultValue="servers" className="h-screen bg-background flex flex-col">
			{isInSupportedClient &&
				<Button variant="outline" className="text-blue-500 hover:text-blue-400">
					<a href={Server_URL} target="_blank" rel="noreferrer">Open website in browser to login, upload, and more.</a>
				</Button>
			}
			<header className="sticky top-0 z-10 p-4 border-b-2 bg-background flex flex-col lg:flex-row lg:justify-evenly items-center">
				<h1 className="lg:text-2xl text-xl font-bold text-foreground">
					DiscoveryDB
				</h1>
				<TabsList className="flex gap-4 justify-center mt-4 lg:mt-0">
					<TabsTrigger value="servers">
						<FontAwesomeIcon icon={faMessage} className="mr-2" />
						Servers
					</TabsTrigger>

					<TabsTrigger value="bots">
						<FontAwesomeIcon icon={faRobot} className="mr-2" />
						Bots
					</TabsTrigger>

					{isInSupportedClient &&
						<TabsTrigger value="plugins">
							<FontAwesomeIcon icon={faPuzzlePiece} className="mr-2" />
							Plugins
						</TabsTrigger>
					}

					<TabsTrigger value="clients">
						<FontAwesomeIcon icon={faBolt} className="mr-2" />
						Clients
					</TabsTrigger>
				</TabsList>
			</header>
			<section className="p-4 flex-1 overflow-auto">
				<TabsContent value="servers">
					<ServerPage />
				</TabsContent>

				<TabsContent value="bots">
					<BotPage />
				</TabsContent>

				<TabsContent value="plugins">
					<PluginsPage />
				</TabsContent>

				<TabsContent value="clients">
					<h1 className="text-4xl font-medium text-white">Clients :D</h1>
				</TabsContent>
			</section>
		</Tabs>
	);
}