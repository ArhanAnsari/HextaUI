import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/CodeBlock";
import React from "react";

import { NextSeo } from "next-seo";

import { Table } from "@/components/hexta-ui/Table";

const table = () => {
  const data = [
    {
      propName: "data",
      propType: "array",
      defaultValue: "[]",
      description: "Data to be displayed in the table.",
    },
    {
      propName: "columns",
      propType: "array",
      defaultValue: "[]",
      description: "Columns to be displayed in the table.",
    },
    {
      propName: "className",
      propType: "string",
      defaultValue: "null",
      description: "Custom class name for the table.",
    },
  ];
  const columns = [
    {
      label: "Prop Name",
      key: "propName",
    },
    {
      label: "Prop Type",
      key: "propType",
    },
    {
      label: "Default Value",
      key: "defaultValue",
    },
    {
      label: "Description",
      key: "description",
    },
  ];

  const TableData = [
    { id: 1, name: "Whiskers", age: 2 },
    { id: 2, name: "Fluffy", age: 5 },
    { id: 3, name: "Sassy", age: 3 },
    { id: 4, name: "Shadow", age: 4 },
    { id: 5, name: "Simba", age: 1 },
    { id: 6, name: "Mittens", age: 2 },
    { id: 7, name: "Snowball", age: 5 },
    { id: 8, name: "Tiger", age: 3 },
    { id: 9, name: "Smokey", age: 4 },
    { id: 10, name: "Kitty", age: 1 },
  ];

  const TableColumns = [
    { key: "id", label: "Kitty ID" },
    { key: "name", label: "Kitty Name" },
    { key: "age", label: "Age" },
  ];

  return (
    <>
      <NextSeo
        title="Table - HextaUI ✨"
        description="Responsive Table component used to display information in table format."
        canonical="https://ui.hextastudio.in/docs/components/layout/table"
        openGraph={{
          url: "https://ui.hextastudio.in/docs/components/layout/table",
          title: "Table - HextaUI ✨",
          description:
            "Responsive Table component used to display information in table format.",
          images: [
            {
              url: "https://i.imgur.com/Vd0QX6d.png",
              width: 1920,
              height: 1080,
              alt: "Table - HextaUI ✨",
              type: "image/png",
            },
          ],
          siteName: "Table - HextaUI ✨",
        }}
      />
      <DocsLayout>
        <main>
          <div className="header">
            <h1 className="h1">Table</h1>
            <p className="text-sm opacity-80">
              Responsive Table component used to display information in table
              format.{" "}
            </p>
          </div>{" "}
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Preview</h3>
                <div className="relative flex items-center justify-center p-6 my-3 overflow-hidden text-center border border-white border-opacity-10 rounded-2xl preview-container">
                  <Table data={TableData} columns={TableColumns} />
                </div>
              </div>
            </div>
          </div>
          <div className="installation">
            <div>
              <h2 className="text-3xl font-bold">Installation</h2>
              <CodeBlock
                lang="bash"
                filename="bash"
                code={`npm install @hextastudio/ui
# or
bun install @hextastudio/ui
# or
yarn add @hextastudio/ui
# or
pnpm add @hextastudio/ui`}
              />

              <CodeBlock
                lang="bash"
                filename="bash"
                code={`npx hexta-ui add`}
              />
              <CodeBlock
                lang="bash"
                filename="bash"
                code={`? Which framework are you using? (Use arrow keys)
> Next.js 
  React`}
              />
              <CodeBlock
                lang="bash"
                filename="bash"
                code={`? Which framework are you using? Next.js
? Which component would you like to install?
  AlertDialog
  Avatar
  Button
  Loader
  Select
> Table
  Toast
  Toggle
  Tooltip`}
              />
              <CodeBlock
                lang="bash"
                filename="bash"
                code={`? Which framework are you using? Next.js         
? Which component would you like to install? Table
✔ Table component was added successfully — Guide to use Table, https://ui.hextastudio.in/docs/components/layout/table`}
              />
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`import { Table } from "@/components/hexta-ui/Table";`}
              />
            </div>
          </div>
          <div>
            <div className="relative flex items-center justify-center p-6 my-3 overflow-hidden text-center border border-white border-opacity-10 rounded-2xl preview-container">
              <Table data={TableData} columns={TableColumns} />
            </div>
            <h3 className="h3">Usage</h3>
            <CodeBlock
              lang="jsx"
              filename="jsx"
              code={`export const Home = () => {
    const data = [
        { id: 1, name: "Whiskers", age: 2 },
        { id: 2, name: "Fluffy", age: 5 },
        { id: 3, name: "Sassy", age: 3 },
        { id: 4, name: "Shadow", age: 4 },
        { id: 5, name: "Simba", age: 1 },
    ];

    const columns = [
        { key: "id", label: "Kitty ID" },
        { key: "name", label: "Kitty Name" },
        { key: "age", label: "Age" },
    ];

    return (
      <>
          <Table data={TableData} columns={TableColumns} />  
      </>
    );
}`}
            />
          </div>
          <Table data={data} columns={columns} tableTitle="Props Information" />
        </main>
      </DocsLayout>
    </>
  );
};

export default table;
