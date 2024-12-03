import { Separator } from "@radix-ui/react-separator";
import { json, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useState } from "react";
import { MarkdownRenderer } from "~/components/markdown-renderer";
import { ThemeToggle } from "~/components/theme-toggle";
import { getLatestSummary } from "~/modules/summaries";

export const meta: MetaFunction = () => {
    return [
        { title: "Macro Trends" },
        { name: "description", content: "Welcome welcome." },
    ];
};

export const loader = async () => {
    const latestSummary = await getLatestSummary();

    if (!latestSummary) {
        return json({ ok: false, message: "No summary found", content: null });
    }

    return json({
        ok: true,
        message: "Summary found!",
        content: latestSummary,
    });
};

export default function Index() {
    const { ok, message, content } = useLoaderData<typeof loader>();

    const [actionLog, setActionLog] = useState<string[]>([]);

    const handleHover = (tagType: string, content: string) => {
        setActionLog((prev) => [
            ...prev,
            `Hovered over ${tagType}: "${content}"`,
        ]);
    };

    const handleClick = (tagType: string, content: string) => {
        setActionLog((prev) => [
            ...prev,
            `Clicked on ${tagType}: "${content}"`,
        ]);
    };

    return (
        <div className="flex h-auto min-h-screen justify-center overflow-y-auto py-20 bg-background dark:bg-foreground">
            <div className="flex flex-col items-center gap-16">
                {/* <header className="flex flex-col items-center gap-9 max-w-3xl">
                    <ThemeToggle />
                </header> */}

                <main className="h-full flex flex-col">
                    <div className="max-w-3xl">
                        <MarkdownRenderer
                            markdown={content?.summary || ""}
                            onHover={handleHover}
                            onClick={handleClick}
                        />
                    </div>
                </main>

                <Separator className="bg-muted-foreground text-muted-foreground flex w-full h-0.5 rounded-full opacity-10 mt-10" />
                <footer className="w-full">
                    <ThemeToggle />
                </footer>
            </div>
        </div>
    );
}
