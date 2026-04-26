import { useState, type ImgHTMLAttributes } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X, ZoomIn } from "lucide-react";

type ZoomableImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  alt: string;
  zoomSrc?: string;
  showZoomHint?: boolean;
  testId?: string;
};

export default function ZoomableImage({
  src,
  alt,
  zoomSrc,
  showZoomHint = true,
  testId,
  className = "",
  ...rest
}: ZoomableImageProps) {
  const [open, setOpen] = useState(false);
  const fullSrc = zoomSrc ?? src;

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          type="button"
          aria-label={`Zoom image: ${alt}`}
          className="group/zoom relative block w-full h-full p-0 m-0 border-0 bg-transparent cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-[inherit]"
          data-testid={testId ? `${testId}-trigger` : undefined}
        >
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className={className}
            {...rest}
          />
          {showZoomHint && (
            <span className="pointer-events-none absolute top-2 right-2 inline-flex items-center justify-center rounded-full bg-black/60 backdrop-blur-sm text-white p-1.5 opacity-0 group-hover/zoom:opacity-100 transition-opacity">
              <ZoomIn size={14} />
            </span>
          )}
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 focus:outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
          onClick={() => setOpen(false)}
          data-testid={testId ? `${testId}-dialog` : undefined}
        >
          <Dialog.Title className="sr-only">{alt}</Dialog.Title>
          <Dialog.Description className="sr-only">
            Full-size image preview. Click anywhere or press Escape to close.
          </Dialog.Description>
          <img
            src={fullSrc}
            alt={alt}
            className="max-w-full max-h-full object-contain rounded-md shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <Dialog.Close asChild>
            <button
              type="button"
              aria-label="Close image preview"
              className="absolute top-4 right-4 inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white p-2 backdrop-blur-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              data-testid={testId ? `${testId}-close` : undefined}
            >
              <X size={20} />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
