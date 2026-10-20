import Image from 'next/image';
import {
  ArrowRight,
  Check,
  FileText,
  Layers,
  Users,
  Search,
  Video,
  Send,
  Play,
  Mail,
  Calendar,
  CheckCheck,
} from "lucide-react";
import { productStories } from "@/content/product-stories";

export const productIcons = {
  notes: FileText,
  agents: Layers,
  hiring: Users,
  leads: Search,
  video: Video,
  email: Send,
};
type Product = (typeof productStories)[number];

// These are explanatory illustrations, not screenshots or live product results.
function ProductDiagram({ kind }: { kind: Product["kind"] }) {
  switch (kind) {
    case "notes":
      return (
        <div className="notes-diagram">
          <div className="diagram-paper">
            <FileText size={22} />
            <strong>Meeting captured</strong>
            <div className="diagram-lines">
              <i />
              <i />
              <i />
            </div>
            <span className="diagram-caption">Conversation → notes</span>
          </div>
          <div className="diagram-action">
            <CheckCheck size={20} />
            <div>
              <strong>Actions taken</strong>
              <span>The next step, in focus.</span>
            </div>
          </div>
        </div>
      );
    case "agents":
      return (
        <div className="agents-diagram">
          <div className="agent-hub">
            <Layers size={32} />
            <strong>H3ive</strong>
            <span>Coordinate the work</span>
          </div>
          <div className="agent-connectors" />
          <div className="agent-nodes">
            {["Agents", "Tasks", "Completion"].map((label) => (
              <div key={label}>
                <span className="node-dot" />
                {label}
              </div>
            ))}
          </div>
        </div>
      );
    case "hiring":
      return (
        <div className="hiring-diagram">
          <span className="diagram-caption">Candidate profiles</span>
          <div className="candidate-stack">
            {[0, 1, 2].map((i) => (
              <div className="candidate-row" key={i}>
                <span className="candidate-avatar">
                  <Users size={19} />
                </span>
                <div className="diagram-lines">
                  <i />
                  <i />
                </div>
                <Check size={16} />
              </div>
            ))}
          </div>
          <div className="diagram-action">
            <Users size={20} />
            <strong>Shortlist ready</strong>
          </div>
        </div>
      );
    case "leads":
      return (
        <div className="leads-diagram">
          <div className="diagram-search">
            <Search size={19} />
            <span>Find relevant leads</span>
          </div>
          <div className="lead-network">
            <span />
            <span />
            <div>
              <Search size={28} />
            </div>
            <span />
            <span />
          </div>
          <div className="diagram-action">
            <Send size={19} />
            <div>
              <strong>Outreach prepared</strong>
              <span>Discovery → conversation</span>
            </div>
          </div>
        </div>
      );
    case "video":
      return (
        <div className="video-diagram">
          <div className="video-canvas">
            <span className="video-corner">Brief → video</span>
            <span className="video-play">
              <Play size={27} fill="currentColor" />
            </span>
            <span className="video-frame-line" />
          </div>
          <div className="video-timeline">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="diagram-action">
            <Video size={20} />
            <strong>Video created</strong>
          </div>
        </div>
      );
    case "email":
      return (
        <div className="email-diagram">
          <div className="diagram-paper">
            <div className="email-heading">
              <Mail size={23} />
              <span>Campaign</span>
            </div>
            <div className="diagram-lines">
              <i />
              <i />
              <i />
            </div>
            <div className="email-footer">
              <Calendar size={15} />
              Scheduled
              <ArrowRight size={15} />
              <Send size={15} />
              Delivered
            </div>
          </div>
          <div className="diagram-action">
            <CheckCheck size={20} />
            <strong>Emails delivered</strong>
          </div>
        </div>
      );
  }
}

export default function ProductPreview({ product }: { product: Product }) {
  const Icon = productIcons[product.kind];
  return (
    <div className={`product-illustration illustration-${product.kind}`}>
      <div className="product-preview-photo">
        <Image src={product.image} alt="" fill sizes="(max-width: 760px) 90vw, 650px" />
      </div>
      <div className="product-preview-content">
      <div className="illustration-heading">
        <span>
          <Icon size={18} />
          {product.name}
        </span>
        <span>Product illustration</span>
      </div>
      <div className="illustration-body" aria-hidden="true">
        <ProductDiagram kind={product.kind} />
      </div>
      <div className="illustration-outcome">
        <span className="outcome-dot" />
        {product.outcome}
      </div>
      </div>
    </div>
  );
}
