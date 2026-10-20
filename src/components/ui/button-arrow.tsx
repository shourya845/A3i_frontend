import { ArrowRight } from 'lucide-react';

export default function ButtonArrow() {
  return <span className="button-arrow" aria-hidden="true">
    <ArrowRight className="arrow-current" size={20} />
    <ArrowRight className="arrow-next" size={20} />
  </span>;
}
