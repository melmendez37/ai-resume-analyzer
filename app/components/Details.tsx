import { cn } from "~/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
} from "./Accordion";

// Badge showing number of items
const CountBadge = ({
  count,
  color,
}: {
  count: number;
  color: "green" | "yellow" | "blue" | "purple" | "orange";
}) => {
  const bgColor = {
    green: "bg-green-100 text-green-800",
    yellow: "bg-yellow-100 text-yellow-800",
    blue: "bg-blue-100 text-blue-800",
    purple: "bg-purple-100 text-purple-800",
    orange: "bg-orange-100 text-orange-800",
  }[color];

  return (
    <span
      className={cn(
        "px-2 py-0.5 rounded-full text-sm font-medium shrink-0",
        bgColor
      )}
    >
      {count}
    </span>
  );
};

// Renders string[] as bullets with category-specific icon
const ListCategory = ({
  items,
  icon,
}: {
  items: string[];
  icon: string; // path to icon
}) => {
  if (!items || items.length === 0)
    return <p className="text-gray-400 italic">No items listed.</p>;

  return (
    <div className="flex flex-col gap-3 py-2">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex flex-row items-start gap-3 bg-gray-50 w-full rounded-lg px-5 py-3"
        >
          <img src={icon} className="size-5 mt-1" alt="" />
          <p className="text-lg text-gray-700">{item}</p>
        </div>
      ))}
    </div>
  );
};

// Main details component
const Details = ({ feedback }: { feedback: Feedback }) => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <Accordion>
        {/* Formatting Issues */}
        <AccordionItem id="formatting">
          <AccordionHeader itemId="formatting">
            <div className="flex items-center gap-3">
              <CountBadge count={feedback.formattingIssues.length} color="purple" />
              <span className="text-2xl font-semibold">Formatting Issues</span>
            </div>
          </AccordionHeader>
          <AccordionContent itemId="formatting">
            {/* Logo from Freepik */}
            <ListCategory
              items={feedback.formattingIssues}
              icon="/icons/cogwheel.png" 
            />
            
          </AccordionContent>
        </AccordionItem>

        {/* Missing Keywords */}
        <AccordionItem id="missingKeywords">
          <AccordionHeader itemId="missingKeywords">
            <div className="flex items-center gap-3">
              <CountBadge count={feedback.missingKeywords.length} color="orange" />
              <span className="text-2xl font-semibold">Missing Keywords</span>
            </div>
          </AccordionHeader>
          <AccordionContent itemId="missingKeywords">
            <ListCategory
              items={feedback.missingKeywords}
              icon="/icons/question-mark.png" // question mark
            />
          </AccordionContent>
        </AccordionItem>

        {/* Strengths */}
        <AccordionItem id="strengths">
          <AccordionHeader itemId="strengths">
            <div className="flex items-center gap-3">
              <CountBadge count={feedback.strengths.length} color="green" />
              <span className="text-2xl font-semibold">Strengths</span>
            </div>
          </AccordionHeader>
          <AccordionContent itemId="strengths">
            <ListCategory items={feedback.strengths} icon="/icons/check.svg" />
          </AccordionContent>
        </AccordionItem>

        {/* Weaknesses */}
        <AccordionItem id="weaknesses">
          <AccordionHeader itemId="weaknesses">
            <div className="flex items-center gap-3">
              <CountBadge count={feedback.weaknesses.length} color="yellow" />
              <span className="text-2xl font-semibold">Weaknesses</span>
            </div>
          </AccordionHeader>
          <AccordionContent itemId="weaknesses">
            <ListCategory items={feedback.weaknesses} icon="/icons/warning.svg" />
          </AccordionContent>
        </AccordionItem>

        {/* Suggestions / Improvements */}
        <AccordionItem id="suggestions">
          <AccordionHeader itemId="suggestions">
            <div className="flex items-center gap-3">
              <CountBadge count={feedback.suggestions.length} color="blue" />
              <span className="text-2xl font-semibold">Suggestions</span>
            </div>
          </AccordionHeader>
          <AccordionContent itemId="suggestions">
            {/* Icon from Flaticon's Goodware */}
            <ListCategory items={feedback.suggestions} icon="/icons/lightbulb.png" />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Details;
