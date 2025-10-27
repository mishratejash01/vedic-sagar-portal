export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      bhajans: {
        Row: {
          author: string | null
          bhajan_id: number
          display_order: number
          lyrics: string
          title: string
        }
        Insert: {
          author?: string | null
          bhajan_id?: number
          display_order?: number
          lyrics: string
          title: string
        }
        Update: {
          author?: string | null
          bhajan_id?: number
          display_order?: number
          lyrics?: string
          title?: string
        }
        Relationships: []
      }
      contact_submissions: {
        Row: {
          email: string
          message: string
          name: string
          subject: string | null
          submission_id: number
          submitted_at: string | null
        }
        Insert: {
          email: string
          message: string
          name: string
          subject?: string | null
          submission_id?: number
          submitted_at?: string | null
        }
        Update: {
          email?: string
          message?: string
          name?: string
          subject?: string | null
          submission_id?: number
          submitted_at?: string | null
        }
        Relationships: []
      }
      content_sections: {
        Row: {
          content_type: string
          description: string | null
          display_order: number
          link_key: string | null
          section_id: number
          slug: string
          title: string
        }
        Insert: {
          content_type: string
          description?: string | null
          display_order?: number
          link_key?: string | null
          section_id?: number
          slug: string
          title: string
        }
        Update: {
          content_type?: string
          description?: string | null
          display_order?: number
          link_key?: string | null
          section_id?: number
          slug?: string
          title?: string
        }
        Relationships: []
      }
      festival_mantras: {
        Row: {
          display_order: number
          festival_id: number
          mantra_id: number
          mantra_text: string
          purpose: string | null
        }
        Insert: {
          display_order?: number
          festival_id: number
          mantra_id?: number
          mantra_text: string
          purpose?: string | null
        }
        Update: {
          display_order?: number
          festival_id?: number
          mantra_id?: number
          mantra_text?: string
          purpose?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "festival_mantras_festival_id_fkey"
            columns: ["festival_id"]
            isOneToOne: false
            referencedRelation: "festivals"
            referencedColumns: ["festival_id"]
          },
        ]
      }
      festivals: {
        Row: {
          description: string | null
          display_order: number
          festival_id: number
          name: string
        }
        Insert: {
          description?: string | null
          display_order?: number
          festival_id?: number
          name: string
        }
        Update: {
          description?: string | null
          display_order?: number
          festival_id?: number
          name?: string
        }
        Relationships: []
      }
      gallery_photos: {
        Row: {
          caption: string | null
          display_order: number
          image_url: string
          photo_id: number
        }
        Insert: {
          caption?: string | null
          display_order?: number
          image_url: string
          photo_id?: number
        }
        Update: {
          caption?: string | null
          display_order?: number
          image_url?: string
          photo_id?: number
        }
        Relationships: []
      }
      static_pages: {
        Row: {
          content: string
          page_id: number
          slug: string
          title: string
        }
        Insert: {
          content: string
          page_id?: number
          slug: string
          title: string
        }
        Update: {
          content?: string
          page_id?: number
          slug?: string
          title?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
