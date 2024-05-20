import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/DocsPage/CodeBlock";
import React from "react";

import { Avatar } from "@/components/hexta-ui/Avatar";
import { Table } from "@/components/hexta-ui/Table";
import { InstallationSteps } from "@/components/DocsPage/InstallationSteps";
import { DocsHeader } from "@/components/DocsPage/DocsHeader";
import { DocsSEO } from "@/components/DocsPage/DocsSEO";
import { DocsPreview } from "@/components/DocsPage/DocsPreview";

const avatar = () => {
  const data = [
    {
      propName: "avatarUrl",
      propType: "string",
      defaultValue: "null",
      description: "URL of the avatar.",
    },
    {
      propName: "size",
      propType: "number",
      defaultValue: "40",
      description: "Size of the avatar.",
    },
    {
      propName: "variant",
      propType: "string",
      defaultValue: "null",
      description: "Variant of the avatar.",
    },
    {
      propName: "badgeNumber",
      propType: "number",
      defaultValue: "null",
      description: "Number to be displayed on the badge.",
    },
    {
      propName: "offline",
      propType: "boolean",
      defaultValue: "false",
      description: "Status of the user.",
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

  return (
    <>
      <DocsSEO
        title="Avatars - HextaUI ✨"
        description="Collection of Avatar components with multiple variants."
        image="https://i.imgur.com/Wm4aBoc.png"
      />
      <DocsLayout>
        <main>
          <DocsHeader
            title="Avatar"
            description="Collection of Avatar components with multiple variants."
          />
          <DocsPreview>
            <Avatar avatarUrl="https://placeholder.co/80" size={80} />
          </DocsPreview>
          <InstallationSteps component="Avatar" />
          <div className="installation">
            <div>
              <h3 className="h3">Preview</h3>
              <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[15rem]">
                <Avatar avatarUrl="https://placeholder.co/80" size={80} />
              </div>
              <h3 className="h3">Usage</h3>
              <CodeBlock
                lang="tsx"
                filename="Home.tsx"
                code={`<Avatar avatarUrl="/path/to/avatar.jpg" />`}
              />
            </div>

            <div>
              <h3 className="h3">Preview</h3>
              <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[15rem]">
                <div className="flex gap-4 ">
                  <Avatar
                    variant="withStatus"
                    avatarUrl="https://placeholder.co/80"
                    size={80}
                  />
                  <Avatar
                    variant="withStatus"
                    avatarUrl="https://placeholder.co/80"
                    size={80}
                    offline
                  />
                </div>
              </div>
              <h3 className="h3">Usage</h3>
              <CodeBlock
                lang="tsx"
                filename="Home.tsx"
                code={`<Avatar variant="withStatus" avatarUrl="https://placeholder.co/80" size={80} />

                
<Avatar variant="withStatus" avatarUrl="https://placeholder.co/80" size={80} offline/>`}
              />
            </div>

            <div>
              <h3 className="h3">Preview</h3>
              <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[15rem]">
                <div className="flex gap-4 ">
                  <Avatar
                    variant="withBadge"
                    avatarUrl="https://placeholder.co/80"
                    size={80}
                    badgeNumber={5}
                  />
                </div>
              </div>
              <h3 className="h3">Usage</h3>
              <CodeBlock
                lang="tsx"
                filename="Home.tsx"
                code={` <Avatar variant="withBadge" avatarUrl="https://placeholder.co/80" size={80} badgeNumber={5} />`}
              />
            </div>
          </div>
          <div className="mt-[5rem]">
            <Table
              columns={columns}
              data={data}
              tableTitle="Props Information"
            />
          </div>{" "}
        </main>
      </DocsLayout>
    </>
  );
};

export default avatar;
