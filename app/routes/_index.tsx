import type { MetaFunction } from "@remix-run/node";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "components/ui/tabs";
import {ServerCard} from "components/cardsnstuff/server";

export default function Index() {
    return (
        <main className="flex flex-col h-screen bg-black">
            <header className="p-4 border-b-2">
                <h1 className="text-2xl font-bold text-white">DiscoveryDB</h1>
            </header>
            <Tabs defaultValue="servers" className="h-full">
                <div className="flex h-full flex-col sm:flex-row">
                    <section className="p-4 sm:w-1/6">
                        <TabsList className="w-full">
                            <TabsTrigger value="servers" className="text-white">
                                Servers
                            </TabsTrigger>
                            <TabsTrigger value="bots" className="text-white">
                                Bots
                            </TabsTrigger>
                            <TabsTrigger value="clients" className="text-white">
                                Clients
                            </TabsTrigger>
                        </TabsList>
                    </section>
                    <section className="p-4 sm:w-5/6">
                        <TabsContent value="servers">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                                <ServerCard />
                                <ServerCard />
                                <ServerCard />
                                <ServerCard />
                                <ServerCard />
                                <ServerCard />
                                <ServerCard />
                                <ServerCard />
                                <ServerCard />
                                <ServerCard />
                                <ServerCard />
                                <ServerCard />
                                <ServerCard />
                            </div>
                        </TabsContent>

                        <TabsContent value="bots">
                            <h1 className="text-4xl font-medium text-white">Bots!</h1>
                        </TabsContent>

                        <TabsContent value="clients">
                            <h1 className="text-4xl font-medium text-white">Clients :D</h1>
                        </TabsContent>
                    </section>
                </div>
            </Tabs>
        </main>
    );
}