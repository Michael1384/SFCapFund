// Supabase Database Types — generated from your schema
// Run: npx supabase gen types typescript --project-id YOUR_PROJECT_ID > src/lib/database.types.ts

export interface Database {
  public: {
    Tables: {
      holdings: {
        Row: {
          id: string;
          ticker: string;
          name: string;
          asset_class: 'equity' | 'commodity' | 'etf' | 'crypto' | 'bond' | 'cash';
          shares: number;
          avg_cost: number;
          currency: string;
          sector: string | null;
          thesis: string | null;
          added_date: string;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['holdings']['Row'], 'created_at'>;
        Update: Partial<Database['public']['Tables']['holdings']['Insert']>;
      };

      portfolios: {
        Row: {
          id: string;               // 'overall' | 'short-term' | etc.
          name: string;
          description: string;
          inception: string;
          target_return: string;
          strategy: string;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['portfolios']['Row'], 'created_at'>;
        Update: Partial<Database['public']['Tables']['portfolios']['Insert']>;
      };

      portfolio_holdings: {
        Row: {
          portfolio_id: string;
          holding_id: string;
        };
        Insert: Database['public']['Tables']['portfolio_holdings']['Row'];
        Update: Partial<Database['public']['Tables']['portfolio_holdings']['Row']>;
      };

      price_snapshots: {
        Row: {
          id: string;
          ticker: string;
          price: number;
          previous_close: number;
          change: number;
          change_pct: number;
          volume: number | null;
          market_cap: number | null;
          fetched_at: string;       // ISO timestamp of when price was fetched
          date: string;             // YYYY-MM-DD — for daily history
        };
        Insert: Omit<Database['public']['Tables']['price_snapshots']['Row'], 'id'>;
        Update: Partial<Database['public']['Tables']['price_snapshots']['Insert']>;
      };

      news_items: {
        Row: {
          id: string;
          title: string;
          summary: string;
          source: string;
          url: string;
          published_at: string;
          sentiment: 'positive' | 'negative' | 'neutral';
          tickers: string[] | null;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['news_items']['Row'], 'id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['news_items']['Insert']>;
      };

      team_members: {
        Row: {
          id: string;
          name: string;
          role: string;
          bio: string;
          linkedin: string | null;
          sort_order: number;
        };
        Insert: Omit<Database['public']['Tables']['team_members']['Row'], 'id'>;
        Update: Partial<Database['public']['Tables']['team_members']['Insert']>;
      };
    };
  };
}

// Convenience types
export type HoldingRow        = Database['public']['Tables']['holdings']['Row'];
export type PortfolioRow      = Database['public']['Tables']['portfolios']['Row'];
export type PriceSnapshotRow  = Database['public']['Tables']['price_snapshots']['Row'];
export type NewsItemRow       = Database['public']['Tables']['news_items']['Row'];
export type TeamMemberRow     = Database['public']['Tables']['team_members']['Row'];
