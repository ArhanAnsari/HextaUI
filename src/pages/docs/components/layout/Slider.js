import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/CodeBlock";

import React from "react";

import { NextSeo } from "next-seo";
import { InstallationSteps } from "@/components/utils/InstallationSteps";

import { useState } from "react";
import { Slider } from "@/components/hexta-ui/Slider";
import { Table } from "@/components/hexta-ui/Table";

const data = [
  {
    prop: "value",
    type: "Number",
    default: "0",
    description: "Value of the slider",
  },
  {
    prop: "min",
    type: "Number",
    default: "0",
    description: "Minimum value of the slider",
  },
  {
    prop: "max",
    type: "Number",
    default: "100",
    description: "Maximum value of the slider",
  },
  {
    prop: "onChange",
    type: "Function",
    default: "() => {}",
    description: "Function to be called when value is changed",
  },
  {
    prop: "className",
    type: "String",
    default: "null",
    description: "className for the slider",
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
const slider = () => {
  const [value, setValue] = useState(50);

  return (
    <>
      <NextSeo
        title="Slider - HextaUI ✨"
        description="Slider allows user to select a value from range of specific values."
        canonical="https://ui.hextastudio.in/docs/components/layout/progressBar"
        openGraph={{
          url: "https://ui.hextastudio.in/docs/components/layout/progressBar",
          title: "Slider - HextaUI ✨",
          description:
            "Slider allows user to select a value from range of specific values.",
          images: [
            {
              url: "https://i.imgur.com/rkYrlmH.png",
              width: 1920,
              height: 1080,
              alt: "Slider - HextaUI ✨",
              type: "image/png",
            },
          ],
          siteName: "Slider - HextaUI ✨",
        }}
      />
      <DocsLayout>
        <main>
          {" "}
          <div className="header">
            <h1 className="h1">Slider</h1>
            <p className="text-sm opacity-80">
              Slider allows user to select a value from range of specific
              values.
            </p>
          </div>
          <div className="flex flex-col gap-4 py-10 preview">
            <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[10rem]">
              {" "}
              <div>
                <Slider
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  min={0}
                  max={100}
                />
                <p className="text-sm opacity-80">Value: {value}</p>
              </div>
            </div>
          </div>
          <InstallationSteps component="ProgressBar" />
          <div className="flex flex-col gap-4 py-10 preview">
            <h3 className="h3">Slider</h3>
            <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[10rem]">
              <div>
                <Slider
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  min={0}
                  max={100}
                />
                <p className="text-sm opacity-80">Value: {value}</p>
              </div>
            </div>
          </div>
          <CodeBlock
            lang="jsx"
            filename="jsx"
            code={`import { ProgressBar } from "@/components/hexta-ui/ProgressBar";

export const Home = () => {
    return (
        <>
            <ProgressBar value={50} max={100} />   
        </>
    )
}

`}
          />
          <Table data={data} columns={columns} tableTitle="Props Information" />
        </main>
      </DocsLayout>
    </>
  );
};

export default slider;
