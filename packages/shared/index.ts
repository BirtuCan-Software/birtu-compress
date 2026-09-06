/**
 * Compression supported formats
 */
export type SupportedImageFormat = 'jpeg' | 'png' | 'webp' | 'avif';

/**
 * Payload sent to the backend when requesting an image compression
 */
export interface CompressionOptionsDTO {
  quality: number; // Integer between 1 and 100
  format?: SupportedImageFormat;
  stripMetadata?: boolean;
}

/**
 * Result returned by the compression engine
 */
export interface CompressionResultDTO {
  id: string;
  originalFileName: string;
  originalSize: number; // In bytes
  compressedSize: number; // In bytes
  bytesSaved: number;
  percentageSaved: number; // E.g., 42.5 for 42.5%
  format: SupportedImageFormat;
  compressedImageUrl: string;
  createdAt: string;
}

/**
 * User history item (for authenticated users)
 */
export interface CompressionHistoryItemDTO {
  id: string;
  originalFileName: string;
  originalSize: number;
  compressedSize: number;
  percentageSaved: number;
  format: SupportedImageFormat;
  createdAt: string;
}

/**
 * Authentication response
 */
export interface AuthUserDTO {
  id: string;
  email: string;
  createdAt: string;
}
