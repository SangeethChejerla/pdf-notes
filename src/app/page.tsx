import Editor from '@/components/Editor';
import PdfViewer from '@/components/PDFViewer';
import { Button } from '@/components/ui/button';
import { Upload } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [pdfFile, setPdfFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      setPdfFile(file);
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] p-6">
      <div className="max-w-[1800px] mx-auto">
        <header className="mb-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-semibold text-gray-900">PDF Scribe</h1>
            <div className="relative">
              <input
                type="file"
                onChange={handleFileChange}
                accept=".pdf"
                className="hidden"
                id="pdf-upload"
              />
              <label htmlFor="pdf-upload">
                <Button
                  variant="outline"
                  className="flex items-center gap-2 hover:bg-gray-50 transition-all duration-200"
                >
                  <Upload className="w-4 h-4" />
                  Upload PDF
                </Button>
              </label>
            </div>
          </div>
        </header>

        <main className="flex flex-col lg:flex-row gap-6 h-[calc(100vh-12rem)]">
          <div className="w-full lg:w-1/2 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <PdfViewer file={pdfFile} />
          </div>
          <div className="w-full lg:w-1/2 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <Editor />
          </div>
        </main>
      </div>
    </div>
  );
}
